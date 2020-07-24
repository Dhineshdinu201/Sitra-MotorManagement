import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../Common/api.service';
import { DataServiceService } from '../../Common/data-service.service';
import { MotorBurntOutReasonsMasterFormComponent } from '../../Forms/motor-burnt-out-reasons-master-form/motor-burnt-out-reasons-master-form.component';
import { MotorBurntOutReasonsMasterViewComponent } from '../../Views/motor-burnt-out-reasons-master-view/motor-burnt-out-reasons-master-view.component';
import { LoginComponent } from '../../Common/login/login.component';


@Component({
  selector: 'app-motor-burnt-out-reason-master-list',
  templateUrl: './motor-burnt-out-reason-master-list.component.html',
  styleUrls: ['./motor-burnt-out-reason-master-list.component.css']
})
export class MotorBurntOutReasonMasterListComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  searchText: any;
  checkLogin: boolean;
  modalRef: BsModalRef;
  message: string;
  index: number;
  p: any;
  deleteData: any;
  tableData: any;
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {

    //get Department Master Data

    this.dataservice.getAllMotorBurntoutReasonsData().subscribe((res: any[]) => {
      console.log(res);
      this.jsonData = res;


    });
    console.log(this.jsonData);
    this.checkLogin = apiservice.getLoginClick();
    if (!this.checkLogin) {
      this.apiservice.openModalWithComponent(LoginComponent);
    }
  }

  onKey(event, newValue) {

    this.searchText = newValue;

  }
  ngOnInit() {

  }
  openModal(template: TemplateRef<any>, i,data) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this.index = i;
    this.deleteData = data;
    console.log(this.index);
    console.log("i" + i);
  }


  confirm(): void {
    this.Delete(this.deleteData);
    this.message = 'Confirmed!';
    this.toastr.success('Motor Management!', 'Deletedsucessfull');
    this.modalRef.hide();
  }
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();

  }
  Add() {

    this.apiservice.openModalWithComponent(MotorBurntOutReasonsMasterFormComponent);
  }
  Edit(data) {
    this.apiservice.setEditMasterData(data);
    this.apiservice.openModalWithComponent(MotorBurntOutReasonsMasterFormComponent);
  }
  Delete(data) {
    let code = data.reason_id;
    let custid = this.apiservice.getCusId();
    let departmentMaster = {
      reason_id: code,
      custid: custid
    };
    this.dataservice.DeleteMotorBurntoutReasonsData(departmentMaster).subscribe(resp => {
      if (resp == true) {
        this.toastr.success("Deleted Successfully")
        this.dataservice.getAllMotorBurntoutReasonsData().subscribe((res: any[]) => {
          console.log(res);
          this.jsonData = res;
        });
      }
    });
  }
  View(data) {
    this.apiservice.setEditMasterData(data);
    this.bsModalRef = this.modalService.show(MotorBurntOutReasonsMasterViewComponent);
  }
  receiveMessage($event) {
    let popHide = $event
    if (popHide) {
      this.bsModalRef.hide;
    }
  }
  ngAfterViewChecked() {
    this.dataservice.getAllMotorBurntoutReasonsData().subscribe((res: any[]) => {
      console.log(res);
      this.jsonData = res;
    });
  }
}
