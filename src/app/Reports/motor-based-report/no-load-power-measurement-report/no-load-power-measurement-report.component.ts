import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../Common/api.service';
import { DataServiceService } from '../../../Common/data-service.service';
import { LoginComponent } from '../../../Common/login/login.component';

@Component({
  selector: 'app-no-load-power-measurement-report',
  templateUrl: './no-load-power-measurement-report.component.html',
  styleUrls: ['./no-load-power-measurement-report.component.css']
})
export class NoLoadPowerMeasurementReportComponent implements OnInit {
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

