import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../../Common/login/login.component';
import { DataServiceService } from '../../../Common/data-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../../Common/api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-full-load-measurements-report',
  templateUrl: './full-load-measurements-report.component.html',
  styleUrls: ['./full-load-measurements-report.component.css']
})
export class FullLoadMeasurementsReportComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  searchText: any;
  deleteData: any;
  checkLogin: boolean;
  modalRef: BsModalRef;
  message: string;
  p: any;
  index: number;
  motorId: any;
  tableData: any;
  bsModalRef: BsModalRef;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {

    //get Department Master Data
    this.motorId=this.apiservice.getMOtorId();
    this.dataservice.getAllFullLoadMeasurementsReport(this.motorId).subscribe((res: any[]) => {
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
