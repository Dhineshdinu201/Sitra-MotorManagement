import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../Common/api.service';
import { DataServiceService } from '../../../Common/data-service.service';
import { LoginComponent } from '../../../Common/login/login.component';


@Component({
  selector: 'app-motor-efficieny-details',
  templateUrl: './motor-efficieny-details.component.html',
  styleUrls: ['./motor-efficieny-details.component.css']
})
export class MotorEfficienyDetailsComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  p: any;
  jsonData = [];
  searchText: any;
  checkLogin: boolean;
  modalRef: BsModalRef;
  message: string;
  popHide: boolean;
  index: number;
  deleteData: any;
  tableData: any;
  departmentMaster: { custid: any, Dept_code: any };
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {
    this.dataservice.getMotorEfficiencyDetails().subscribe((res: any[]) => {
      this.jsonData = res;
    });
  }
  onKey(event, newValue) {
    this.searchText = newValue;
  }
  ngOnInit() {
  }
}
