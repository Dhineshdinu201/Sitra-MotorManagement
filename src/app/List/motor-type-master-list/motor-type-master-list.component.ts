import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../Common/api.service';
import { DataServiceService } from '../../Common/data-service.service';
import { MotorTypeMasterFormComponent } from '../../Forms/motor-type-master-form/motor-type-master-form.component';
import { MotorTypeMasterViewComponent } from '../../Views/motor-type-master-view/motor-type-master-view.component';
import { LoginComponent } from '../../Common/login/login.component';
@Component({
  selector: 'app-motor-type-master-list',
  templateUrl: './motor-type-master-list.component.html',
  styleUrls: ['./motor-type-master-list.component.css']
})
export class MotorTypeMasterListComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  deleteData: any;
  searchText: any;
  checkLogin: boolean;
  p: any;
  modalRef: BsModalRef;
  message: string;
  index: number;
  tableData: any;
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {
    //get Department Master Data
    this.dataservice.getAllMotorTypeData().subscribe((res: any[]) => {
      this.jsonData = res;
    });
    this.checkLogin = apiservice.getLoginClick();
    if (!this.checkLogin) {
      this.apiservice.openModalWithLoginComponent(LoginComponent);
    }
  }
  onKey(event, newValue) {
    this.searchText = newValue;
  }
  ngOnInit() {
    this.getMotor();
  }
  getMotor(){
    this.dataservice.getAllMotorTypeData().subscribe((res: any[]) => {
      this.jsonData = res;
    });
  }
  openModal(template: TemplateRef<any>, i,data) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this.index = i;
    this.deleteData = data;
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
    this.apiservice.openModalWithComponent(MotorTypeMasterFormComponent);
  }
  Edit(data) {
    this.apiservice.setEditMasterData(data);
    this.apiservice.openModalWithComponent(MotorTypeMasterFormComponent);
  }
  Delete(data) {
    let code = data.Motor_Type_Code;
    let custid = this.apiservice.getCusId();
    let departmentMaster = {
      Motor_Type_Code: code,
      custid: custid
    };
    this.dataservice.DeleteMotorTypeData(departmentMaster).subscribe(resp => {
      if (resp == true) {
        this.toastr.success("Deleted Successfully")
        this.dataservice.getAllMotorTypeData().subscribe((res: any[]) => {
          this.jsonData = res;
        });
      }
    });
  }
  View(data) {
    this.apiservice.setEditMasterData(data);
    this.bsModalRef = this.modalService.show(MotorTypeMasterViewComponent);
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
