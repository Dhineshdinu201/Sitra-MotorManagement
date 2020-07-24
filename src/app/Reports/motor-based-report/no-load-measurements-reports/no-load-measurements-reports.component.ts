import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from '../../../Common/login/login.component';
import { DataServiceService } from '../../../Common/data-service.service';
import { ApiService } from '../../../Common/api.service';

@Component({
  selector: 'app-no-load-measurements-reports',
  templateUrl: './no-load-measurements-reports.component.html',
  styleUrls: ['./no-load-measurements-reports.component.css']
})
export class NoLoadMeasurementsReportsComponent implements OnInit {
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
    
  }

  onKey(event, newValue) {

    this.searchText = newValue;

  }
  ngOnInit() {

  }

}
