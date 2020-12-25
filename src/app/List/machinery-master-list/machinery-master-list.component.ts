import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { MachineryMasterFormComponent } from '../../Forms/machinery-master-form/machinery-master-form.component';
import { MachineryMasterViewComponent } from '../../Views/machinery-master-view/machinery-master-view.component';
import { LoginComponent } from '../../Common/login/login.component';
import { QRPopComponentComponent } from '../../Common/qrpop-component/qrpop-component.component';

@Component({
  selector: 'app-machinery-master-list',
  templateUrl: './machinery-master-list.component.html',
  styleUrls: ['./machinery-master-list.component.css']
})
export class MachineryMasterListComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData: any[] = [];
  searchText: any;
  checkLogin: boolean;
  modalRef: BsModalRef;
  p: any;
  message: string;
  deleteData: any;
  index: number;
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {
    this.getJSON().subscribe(data => {
      this.jsonData = data;
      this.dataservice.getAllMachineryMasterData().subscribe((res: any[]) => {
        this.jsonData = res;
      });
      this.checkLogin = apiservice.getLoginClick();
      if (!this.checkLogin) {
        this.apiservice.openModalWithLoginComponent(LoginComponent);
      }
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  onKey(event, newValue) {
    this.searchText = newValue;
  }
  ngOnInit() {
    this.getMotor();
  }
  getMotor() {
    this.dataservice.getAllMachineryMasterData().subscribe((res: any[]) => {
      this.jsonData = res;
    });
  }
  openModal(template: TemplateRef<any>, i, data) {
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
    this.apiservice.openModalWithComponent(MachineryMasterFormComponent);
  }

  Edit(data) {
    this.apiservice.setEditMasterData(data);
    this.apiservice.openModalWithComponent(MachineryMasterFormComponent);
  }

  generateQRCode(data) {
    data['type'] = "machinery";
    const initialState = {
      value: data
    };
    this.apiservice.openModalWithComponentData(QRPopComponentComponent, initialState);
  }

  Delete(data) {
    let code = data.Mac_Id;
    let custid = this.apiservice.getCusId();
    let departmentMaster = {
      Mac_Id: code,
      custid: custid
    };
    this.dataservice.DeleteMachineryMasterData(departmentMaster).subscribe(resp => {
      if (resp == true) {
        this.toastr.success("Deleted Successfully")
        this.dataservice.getAllMachineryMasterData().subscribe((res: any[]) => {
          this.jsonData = res;
        });
      }
    });
  }
  View(data) {
    this.apiservice.setEditMasterData(data);
    this.bsModalRef = this.modalService.show(MachineryMasterViewComponent);
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
