import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../Common/data-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../../Common/api.service';
import { LoginComponent } from '../../../Common/login/login.component';

@Component({
  selector: 'app-motor-name-plate-report',
  templateUrl: './motor-name-plate-report.component.html',
  styleUrls: ['./motor-name-plate-report.component.css']
})
export class MotorNamePlateReportComponent implements OnInit {
  private _jsonURL = 'assets/master.json';
  jsonData = [];
  searchText: any;
  checkLogin: boolean;
  p: any;
  message: string;
  deleteData: any;
  index: number;
  tableData: any;
    modalService: any;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService) {
    //get Department Master Data
    this.dataservice.getAllMotorNamePlate().subscribe((res: any[]) => {
      this.jsonData = res;
    });
  }
  onKey(event, newValue) {
    this.searchText = newValue;
  }
  ngOnInit() {
  }
 
}
