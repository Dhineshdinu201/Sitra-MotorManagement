import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../Common/data-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../../Common/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-motor-failure-information-report',
  templateUrl: './motor-failure-information-report.component.html',
  styleUrls: ['./motor-failure-information-report.component.css']
})
export class MotorFailureINformationReportComponent implements OnInit {
  searchText: any;
  jsonData: any;
  motorId = this.apiservice.getMOtorId();
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private toastr: ToastrService) {
    this.dataservice.selectActiveMotor_failure_detailsData(this.motorId).subscribe((res: any[]) => {
      console.log(res);
      this.jsonData = res;


    });
  }

  ngOnInit() {
  }
  onKey(event, newValue) {

    this.searchText = newValue;

  }
}
