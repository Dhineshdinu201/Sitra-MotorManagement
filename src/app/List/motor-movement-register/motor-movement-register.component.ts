import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { MotorMovementRegisterViewComponent } from '../../Views/motor-movement-register-view/motor-movement-register-view.component';
import { MotorMovementRegisterFormComponent } from '../../Forms/motor-movement-register-form/motor-movement-register-form.component';
import { LoginComponent } from '../../Common/login/login.component';


@Component({
  selector: 'app-motor-movement-register',
  templateUrl: './motor-movement-register.component.html',
  styleUrls: ['./motor-movement-register.component.css']
})
export class MotorMovementRegisterComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  searchText: any;
  p: any;
  checkLogin: boolean;
  modalRef: BsModalRef;
  message: string;
  deleteData: any;
  index: number;
  tableData: any;
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {
    //get Department Master Data
    this.dataservice.getAllMotorMovementRegisterData().subscribe((res: any[]) => {
      this.jsonData = res;
    });
    this.checkLogin = apiservice.getLoginClick();
    if (!this.checkLogin) {
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
    this.dataservice.getAllMotorMovementRegisterData().subscribe((res: any[]) => {
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
    this.apiservice.openModalWithComponent(MotorMovementRegisterFormComponent);
  }
  Edit(data) {
    this.apiservice.setEditMasterData(data);
    this.apiservice.openModalWithComponent(MotorMovementRegisterFormComponent);
  }
  Delete(data) {
    let code = data.register_id;
    let custid = this.apiservice.getCusId();
    let departmentMaster = {
      register_id: code,
      custid: custid
    };
    this.dataservice.DeleteMotorMovementRegisterData(departmentMaster).subscribe(resp => {
      if (resp == true) {
        this.toastr.success("Deleted Successfully")
        this.dataservice.getAllMotorMovementRegisterData().subscribe((res: any[]) => {
          this.jsonData = res;
        });
      }
    });
  }
  View(data) {
    this.apiservice.setEditMasterData(data);
    this.bsModalRef = this.modalService.show(MotorMovementRegisterViewComponent);
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
