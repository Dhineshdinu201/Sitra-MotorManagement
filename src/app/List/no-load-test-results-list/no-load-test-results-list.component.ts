import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../Common/api.service';
import { DataServiceService } from '../../Common/data-service.service';
import { NoLoadTestResultsFormComponent } from '../../Forms/no-load-test-results-form/no-load-test-results-form.component';
import { NoLoadTestResultsViewComponent } from '../../Views/no-load-test-results-view/no-load-test-results-view.component';
import { LoginComponent } from '../../Common/login/login.component';

@Component({
  selector: 'app-no-load-test-results-list',
  templateUrl: './no-load-test-results-list.component.html',
  styleUrls: ['./no-load-test-results-list.component.css']
})
export class NoLoadTestResultsListComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  searchText: any;
  checkLogin: boolean;
  modalRef: BsModalRef;
  message: string;
  p: any;
  index: number;
  tableData: any;
  deleteData: any;
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {
    //get Department Master Data
    this.dataservice.getAllActiveNoLoadTestResultsData().subscribe((res: any[]) => {
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
    this.dataservice.getAllActiveNoLoadTestResultsData().subscribe((res: any[]) => {
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
    this.apiservice.openModalWithComponent(NoLoadTestResultsFormComponent);
  }
  Edit(data) {
    this.apiservice.setEditMasterData(data);
    this.apiservice.openModalWithComponent(NoLoadTestResultsFormComponent);
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
        this.dataservice.getAllActiveNoLoadTestResultsData().subscribe((res: any[]) => {
          this.jsonData = res;
        });
      }
    });
  }
  View(data) {
    this.apiservice.setEditMasterData(data);
    this.bsModalRef = this.modalService.show(NoLoadTestResultsViewComponent);
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
