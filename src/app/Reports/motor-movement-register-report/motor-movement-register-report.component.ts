import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';
import { DataServiceService } from '../../Common/data-service.service';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from '../../Common/login/login.component';

@Component({
  selector: 'app-motor-movement-register-report',
  templateUrl: './motor-movement-register-report.component.html',
  styleUrls: ['./motor-movement-register-report.component.css']
})
export class MotorMovementRegisterReportComponent implements OnInit {
  jsonData: any;
  fromDate: any;
  checkLogin: boolean;
  isSubmitted: boolean = false;
  toDate: any;
  constructor(public dataservice: DataServiceService, private apiservice: ApiService, private toastr: ToastrService) {
    this.checkLogin = this.apiservice.getLoginClick();
    if (!this.checkLogin) {
      this.apiservice.openModalWithComponent(LoginComponent);
    }
  }
  ngOnInit() {
    this.fromDate = new Date();
  }
  submit() {
    this.isSubmitted = true;
    if (this.fromDate == undefined && this.toDate == undefined) {
      this.toastr.error("Input invalid");
      this.isSubmitted = false;
    }
    else {
      let data = { 'fromdate': this.fromDate, 'todate': this.toDate }
      this.dataservice.getAllMotorMovementRegisterDataCric(data).subscribe((res: any[]) => {
        this.jsonData = res;
      });
    }
  }

}
