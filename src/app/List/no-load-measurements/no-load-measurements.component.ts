import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../Common/api.service';
import { DataServiceService } from '../../Common/data-service.service';
import { NoLoadMeasurementFormComponent } from '../../Forms/no-load-measurement-form/no-load-measurement-form.component';
import { NoLoadMeasurementViewComponent } from '../../Views/no-load-measurement-view/no-load-measurement-view.component';
import { LoginComponent } from '../../Common/login/login.component';


@Component({
  selector: 'app-no-load-measurements',
  templateUrl: './no-load-measurements.component.html',
  styleUrls: ['./no-load-measurements.component.css']
})
export class NoLoadMeasurementsComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  searchText: any;
  checkLogin: boolean;
  modalRef: BsModalRef;
  p: any;
  message: string;
  index: number;
  tableData: any;
  deleteData: any;
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {

    //get Department Master Data

    this.dataservice.getAllNoLoadMeasurementsData().subscribe((res: any[]) => {
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
    this.apiservice.openModalWithComponent(NoLoadMeasurementFormComponent);
  }
  Edit(data) {
    this.apiservice.setEditMasterData(data);
    this.apiservice.openModalWithComponent(NoLoadMeasurementFormComponent);
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
        this.dataservice.getAllNoLoadMeasurementsData().subscribe((res: any[]) => {
          console.log(res);
          this.jsonData = res;
        });
      }
    });

  }
  View(data) {
    this.apiservice.setEditMasterData(data);
    this.bsModalRef = this.modalService.show(NoLoadMeasurementViewComponent);
  }
  receiveMessage($event) {
    let popHide = $event
    if (popHide) {
      this.bsModalRef.hide;
    }
  }
  ngAfterViewChecked() {
    this.dataservice.getAllNoLoadMeasurementsData().subscribe((res: any[]) => {
      console.log(res);
      this.jsonData = res;
    });
  }
}
