import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../Common/api.service';
import { DataServiceService } from '../../Common/data-service.service';
import { MotorDetailsFormComponent } from '../../Forms/motor-details-form/motor-details-form.component';
import { MotorDetailsViewComponent } from '../../Views/motor-details-view/motor-details-view.component';
import { LoginComponent } from '../../Common/login/login.component';

@Component({
  selector: 'app-motor-details-list',
  templateUrl: './motor-details-list.component.html',
  styleUrls: ['./motor-details-list.component.css']
})
export class MotorDetailsListComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  p: any;
  searchText: any;
  checkLogin: boolean;
  modalRef: BsModalRef;
  message: string;
  deleteData: any;
  index: number;
  tableData: any;
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {
    //get Department Master Data
    this.dataservice.getAllMotorDetails().subscribe((res: any[]) => {
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
    this.dataservice.getAllMotorDetails().subscribe((res: any[]) => {
      this.jsonData = res;
    });
  }
  openMotor() {
    if (this.apiservice.getCusId() != null) {
      let data = { custid: this.apiservice.getCusId() };
      this.dataservice.calculateAllMotor_effy_details(data).subscribe(resp => {
        if (resp == true) {
          this.toastr.success("Calculated Successfully")
        }
      });
    } else {
      this.toastr.error("Please Login");
    }
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
    this.apiservice.openModalWithComponent(MotorDetailsFormComponent);
  }
  Edit(data) {
    this.apiservice.setEditMasterData(data);
    this.apiservice.openModalWithComponent(MotorDetailsFormComponent);
  }
  Delete(data) {
    let code = data.Motor_Det_Id;
    let custid = this.apiservice.getCusId();
    let departmentMaster = {
      Motor_Det_Id: code,
      custid: custid
    };
    this.dataservice.DeleteMotorDetails(departmentMaster).subscribe(resp => {
      if (resp == true) {
        this.toastr.success("Deleted Successfully")
      }
    });

  }
  CalculateMotorEffyDetails(data) {
    let body = {
      'custid': this.apiservice.getCusId(),
      'Motor_Id': data.Motor_Id
    };
    this.dataservice.getCalculateMotorEffyDetails(body).subscribe(resp => {
      if (resp == true) {
        this.toastr.success("Calculated Successfully")
        this.dataservice.getAllMotorDetails().subscribe((res: any[]) => {
          this.jsonData = res;
        });
      }
    });
  }
  View(data) {
    this.apiservice.setEditMasterData(data);
    this.bsModalRef = this.modalService.show(MotorDetailsViewComponent);
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
