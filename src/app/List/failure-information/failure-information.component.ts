import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../Common/api.service';
import { DataServiceService } from '../../Common/data-service.service';
import { FailureInformationFormComponent } from '../../Forms/failure-information-form/failure-information-form.component';
import { FailureInformationViewComponent } from '../../Views/failure-information-view/failure-information-view.component';
import { LoginComponent } from '../../Common/login/login.component';



@Component({
  selector: 'app-failure-information',
  templateUrl: './failure-information.component.html',
  styleUrls: ['./failure-information.component.css']
})
export class FailureInformationComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  searchText: any;
  checkLogin: boolean;
  modalRef: BsModalRef;
  p: any;
  deleteData: any;
  message: string;
  index: number;
  tableData: any;
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {
    //get Department Master Data
    this.dataservice.getAllMotorFailureDetailsData().subscribe((res: any[]) => {
      this.jsonData = res;
    });
    this.checkLogin = apiservice.getLoginClick();
    if (!this.checkLogin) {
      // this.router.navigate(['/login']);
      this.apiservice.openModalWithComponent(LoginComponent);
    }
  }
  onKey(event, newValue) {
    this.searchText = newValue;
  }
  ngOnInit() {
    this.getMotor();
  }
  getMotor(){
    this.dataservice.getAllMotorFailureDetailsData().subscribe((res: any[]) => {
      this.jsonData = res;
    });
  }
  openModal(template: TemplateRef<any>, i, data) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this.index = i;
    this.deleteData = data
    console.log(this.index);
    console.log("i" + i);
  }
  confirm(): void {
    this.message = 'Confirmed!';
    this.Delete(this.deleteData);
    this.toastr.success('Motor Management!', 'Deletedsucessfull');
    this.modalRef.hide();
  }
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
  Add() {
    this.apiservice.openModalWithComponent(FailureInformationFormComponent);
  }
  Edit(data) {
    this.apiservice.setEditMasterData(data);
    this.apiservice.openModalWithComponent(FailureInformationFormComponent);
  }
  Delete(data) {

    let code = data.failure_id;
    let custid = this.apiservice.getCusId();
    let departmentMaster = {
      failure_id: code,
      custid: custid
    };
    this.dataservice.DeleteMotorFailureDetailsData(departmentMaster).subscribe(resp => {
      if (resp == true) {
        this.toastr.success("Deleted Successfully")
        this.dataservice.getAllMotorFailureDetailsData().subscribe((res: any[]) => {
          console.log(res);
          this.jsonData = res;
        });
      }
    });
  }
  View(data) {
    this.apiservice.setEditMasterData(data);
    this.bsModalRef = this.modalService.show(FailureInformationViewComponent);
  }
  receiveMessage($event) {
    let popHide = $event
    if (popHide) {
      this.bsModalRef.hide;
    }
  }
  ngAfterViewChecked() {
  }
}
