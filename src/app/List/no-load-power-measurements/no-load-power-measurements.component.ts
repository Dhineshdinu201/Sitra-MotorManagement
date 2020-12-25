import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../Common/api.service';
import { DataServiceService } from '../../Common/data-service.service';
import { NoLoadPowerMeasurementFormComponent } from '../../Forms/no-load-power-measurement-form/no-load-power-measurement-form.component';
import { NoLoadPowerMeasurementViewComponent } from '../../Views/no-load-power-measurement-view/no-load-power-measurement-view.component';
import { LoginComponent } from '../../Common/login/login.component';

@Component({
  selector: 'app-no-load-power-measurements',
  templateUrl: './no-load-power-measurements.component.html',
  styleUrls: ['./no-load-power-measurements.component.css']
})
export class NoLoadPowerMeasurementsComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  searchText: any;
  checkLogin: boolean;
  modalRef: BsModalRef;
  message: string;
  p: any;
  deleteData: any;
  index: number;
  tableData: any;
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {
    //get Department Master Data
    this.dataservice.getAllNoLoadPowerMeasurementsDataModel().subscribe((res: any[]) => {
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
    this.dataservice.getAllNoLoadPowerMeasurementsDataModel().subscribe((res: any[]) => {
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
    this.apiservice.openModalWithComponent(NoLoadPowerMeasurementFormComponent);
  }
  Edit(data) {
    this.apiservice.setEditMasterData(data);
    this.apiservice.openModalWithComponent(NoLoadPowerMeasurementFormComponent);
  }
  Delete(data) {
    let code = data.load_id;
    let custid = this.apiservice.getCusId();
    let departmentMaster = {
      load_id: code,
      custid: custid
    };
    this.dataservice.DeleteMotorTypeData(departmentMaster).subscribe(resp => {
      if (resp == true) {
        this.toastr.success("Deleted Successfully")
        this.dataservice.getAllNoLoadPowerMeasurementsDataModel().subscribe((res: any[]) => {
          console.log(res);
          this.jsonData = res;
        });
      }
    });
  }
  View(data) {
    this.apiservice.setEditMasterData(data);
    this.bsModalRef = this.modalService.show(NoLoadPowerMeasurementViewComponent);
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
