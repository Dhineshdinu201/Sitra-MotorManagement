import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from '../../../Common/login/login.component';
import { DataServiceService } from '../../../Common/data-service.service';
import { ApiService } from '../../../Common/api.service';

@Component({
  selector: 'app-motor-detail-report',
  templateUrl: './motor-detail-report.component.html',
  styleUrls: ['./motor-detail-report.component.css']
})
export class MotorDetailReportComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  p: any;
  searchText: any;
  checkLogin: boolean;
  message: string;
  deleteData: any;
  index: number;
  tableData: any;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {
    //get Department Master Data
    this.dataservice.getAllMotorDetails().subscribe((res: any[]) => {
      this.jsonData = res;
    });
  }
  onKey(event, newValue) {
    this.searchText = newValue;
  }
  ngOnInit() {
  }
}
