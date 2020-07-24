import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../Common/api.service';
import { DataServiceService } from '../../Common/data-service.service';
import { DepartmentMasterFormComponent } from '../../Forms/department-master-form/department-master-form.component';
import { DepartmentMasterViewComponent } from '../../Views/department-master-view/department-master-view.component';
import { LoginComponent } from '../../Common/login/login.component';


@Component({
  selector: 'app-department-master-list',
  templateUrl: './department-master-list.component.html',
  styleUrls: ['./department-master-list.component.css']
})
export class DepartmentMasterListComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
p:any;
  jsonData=[];
  searchText:any;
  checkLogin:boolean;
  modalRef: BsModalRef;
  message: string;
  isLogin: boolean=false;
  popHide: boolean;
  index: number;
  deleteData: any;
  tableData: any;
  name: string;
  departmentMaster: { custid: any, Dept_code: any };
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService,private http: HttpClient,private router: Router,private apiservice: ApiService,private modalService: BsModalService,private toastr: ToastrService) {  
    
    //get Department Master Data

    this.dataservice.getAllDepartmentMasterData().subscribe((res : any[])=>{
      this.jsonData = res;

      this.name=this.apiservice.getName();
  });
    this.checkLogin=apiservice.getLoginClick();
    if(!this.checkLogin){
      // this.router.navigate(['/login']);
      this.apiservice.openModalWithComponent(LoginComponent);
    }
    this.checkLogin = true;
 }

 onKey(event, newValue){
 
  this.searchText=newValue;
  
}
  ngOnInit() {
    this.dataservice.getAllDepartmentMasterData().subscribe((res: any[]) => {
      this.jsonData = res;
      this.isLogin = this.apiservice.getLoginClick();
      this.name = this.apiservice.getName();
    });
  }
  openModal(template: TemplateRef<any>,i,data) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.index = i;
    this.deleteData = data;
  }
 
 
  confirm(): void {
    this.message = 'Confirmed!';
    this.Delete(this.deleteData);
    this.modalRef.hide();
  }
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
    
  }
  Add() {
    this.apiservice.openModalWithComponent(DepartmentMasterFormComponent);
  }
  Edit(data) {
    this.apiservice.setEditMasterData(data);
    this.apiservice.openModalWithComponent(DepartmentMasterFormComponent);
  }
  Delete(data) {
    let code = data.Dept_Code;
    let custid = this.apiservice.getCusId();
    let departmentMaster = {
      Dept_Code: code,
      custid: custid
    };
    this.dataservice.DeleteDepartmentMasterData(departmentMaster).subscribe(resp => {
      if (resp == true) {
        this.toastr.success("Deleted Successfully")
        this.dataservice.getAllDepartmentMasterData().subscribe((res: any[]) => {
          this.jsonData = res;
          this.isLogin = this.apiservice.getLoginClick();
          this.name = this.apiservice.getName();
        });

      }
    });
  }
  View(data){
  this.apiservice.setEditMasterData(data);
  this.bsModalRef = this.modalService.show(DepartmentMasterViewComponent);
}
  receiveMessage($event) {
    let popHide = $event
    if (popHide) {
      this.bsModalRef.hide;
    }
  }

  ngAfterViewChecked(){
   
  }

}
