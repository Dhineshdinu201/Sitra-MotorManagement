import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from '../../Common/login/login.component';

@Component({
  selector: 'app-motor-failure-report',
  templateUrl: './motor-failure-report.component.html',
  styleUrls: ['./motor-failure-report.component.css']
})
export class MotorFailureReportComponent implements OnInit {

  jsonData: any;
  isSubmitted: boolean = false;
  fromDate: any;
  checkLogin: boolean;
  toDate: any;
  constructor(public dataservice: DataServiceService, private apiservice: ApiService, private toastr: ToastrService) {
    this.checkLogin = this.apiservice.getLoginClick();
    if (!this.checkLogin) {
      this.apiservice.openModalWithLoginComponent(LoginComponent);
    }
  }
  ngOnInit() {
  }
  submit() {
    this.isSubmitted = true;
    if (!(this.fromDate == undefined && this.toDate == undefined)) {
      let data = { 'fromdate': this.fromDate, 'todate': this.toDate }
      this.dataservice.selectActiveMotor_failure_detailsDataCric(data).subscribe((res: any[]) => {
        this.jsonData = res;
      });
    } else {
      this.toastr.error("Input invalid");
      this.isSubmitted = false;
    }
  }
}
