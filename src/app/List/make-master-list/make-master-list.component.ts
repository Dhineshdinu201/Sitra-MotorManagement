import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../Common/api.service';
import { DataServiceService } from '../../Common/data-service.service';
import { MakeMasterFormComponent } from '../../Forms/make-master-form/make-master-form.component';
import { MakeMasterViewComponent } from '../../Views/make-master-view/make-master-view.component';
import { LoginComponent } from '../../Common/login/login.component';

@Component({
  selector: 'app-make-master-list',
  templateUrl: './make-master-list.component.html',
  styleUrls: ['./make-master-list.component.css']
})
export class MakeMasterListComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  p: any;
  searchText: any;
  checkLogin: boolean;
  modalRef: BsModalRef;
  message: string;
  index: number;
  deleteData: any;
  tableData: any;
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {

    //get Department Master Data

    this.dataservice.getAllMakeMasterData().subscribe((res: any[]) => {
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
    this.apiservice.openModalWithComponent(MakeMasterFormComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  Edit(data) {
    this.apiservice.setEditMasterData(data);
    this.apiservice.openModalWithComponent(MakeMasterFormComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  Delete(data) {
    let code = data.Make_Code;
    let custid = this.apiservice.getCusId();
    let departmentMaster = {
      Make_Code: code,
      custid: custid
    };
    this.dataservice.DeleteMakeMasterData(departmentMaster).subscribe(resp => {
      if (resp == true) {
        this.toastr.success("Deleted Successfully")
        this.dataservice.getAllMakeMasterData().subscribe((res: any[]) => {
          console.log(res);
          this.jsonData = res;
        });
      }
    });
  }
  View(data) {
    this.apiservice.setEditMasterData(data);
    this.bsModalRef = this.modalService.show(MakeMasterViewComponent);
  }
  receiveMessage($event) {
    let popHide = $event
    if (popHide) {
      this.bsModalRef.hide;
    }
  }
  ngAfterViewChecked() {
    this.dataservice.getAllMakeMasterData().subscribe((res: any[]) => {
      console.log(res);
      this.jsonData = res;
    });
  }
}
