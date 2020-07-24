import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { MotorNamePlateDetailsFormComponent } from '../../Forms/motor-name-plate-details-form/motor-name-plate-details-form.component';
import { MotorNamePlateDetailsViewComponent } from '../../Views/motor-name-plate-details-view/motor-name-plate-details-view.component';
import { LoginComponent } from '../../Common/login/login.component';

@Component({
  selector: 'app-motor-name-plate-list',
  templateUrl: './motor-name-plate-list.component.html',
  styleUrls: ['./motor-name-plate-list.component.css']
})
export class MotorNamePlateListComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  searchText: any;
  checkLogin: boolean;
  p: any;
  message: string;
  deleteData: any;
  index: number;
  tableData: any;
  bsModalRef: BsModalRef;
  modalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {
    //get Department Master Data
    this.dataservice.getAllMotorNamePlate().subscribe((res: any[]) => {
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
    this.dataservice.getAllMotorNamePlate().subscribe((res: any[]) => {
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
    this.apiservice.openModalWithComponent(MotorNamePlateDetailsFormComponent);
  }
  Edit(data) {
    this.apiservice.setEditMasterData(data);
    this.apiservice.openModalWithComponent(MotorNamePlateDetailsFormComponent);
  }
  Delete(data) {
    let code = data.Motor_Id;
    let custid = this.apiservice.getCusId();
    let departmentMaster = {
      Motor_Id: code,
      custid: custid
    };
    this.dataservice.DeleteMotorNamePlate(departmentMaster).subscribe(resp => {
      if (resp == true) {
        this.toastr.success("Deleted Successfully")
        this.dataservice.getAllMotorNamePlate().subscribe((res: any[]) => {
          console.log(res);
          this.jsonData = res;
        });
      }
    });
  }
  View(data) {
    this.apiservice.setEditMasterData(data);
    this.apiservice.openModalWithComponent(MotorNamePlateDetailsViewComponent);
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
