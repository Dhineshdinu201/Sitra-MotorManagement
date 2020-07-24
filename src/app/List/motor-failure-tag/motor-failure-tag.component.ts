import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../Common/api.service';
import { DataServiceService } from '../../Common/data-service.service';
import { MotorFailureTagFormComponent } from '../../Forms/motor-failure-tag-form/motor-failure-tag-form.component';
import { MotorFailureTagViewComponent } from '../../Views/motor-failure-tag-view/motor-failure-tag-view.component';
import { LoginComponent } from '../../Common/login/login.component';

@Component({
  selector: 'app-motor-failure-tag',
  templateUrl: './motor-failure-tag.component.html',
  styleUrls: ['./motor-failure-tag.component.css']
})
export class MotorFailureTagComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  searchText: any;
  checkLogin: boolean;
  modalRef: BsModalRef;
  message: string;
  deleteData: any;
  index: number;
  p: any;
  tableData: any;
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {

    //get Department Master Data

    this.dataservice.getAllMotorFailureTagData().subscribe((res: any[]) => {
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
    this.apiservice.openModalWithComponent(MotorFailureTagFormComponent);
  }
  Edit(data) {
    this.apiservice.setEditMasterData(data);
    this.bsModalRef = this.modalService.show(MotorFailureTagFormComponent);
  }
  Delete(data) {
    let code = data.failure_tag_id;
    let custid = this.apiservice.getCusId();
    let departmentMaster = {
      failure_tag_id: code,
      custid: custid
    };
    this.dataservice.DeleteMotorFailureTagData(departmentMaster).subscribe(resp => {
      if (resp == true) {
        this.toastr.success("Deleted Successfully")
        this.dataservice.getAllMotorFailureTagData().subscribe((res: any[]) => {
          console.log(res);
          this.jsonData = res;
        });
      }
    });

  }
  View(data) {
    this.apiservice.setEditMasterData(data);
    this.bsModalRef = this.modalService.show(MotorFailureTagViewComponent);
  }
  receiveMessage($event) {
    let popHide = $event
    if (popHide) {
      this.bsModalRef.hide;
    }
  }
  ngAfterViewChecked() {
    this.dataservice.getAllMotorFailureTagData().subscribe((res: any[]) => {
      console.log(res);
      this.jsonData = res;
    });
  }
}
