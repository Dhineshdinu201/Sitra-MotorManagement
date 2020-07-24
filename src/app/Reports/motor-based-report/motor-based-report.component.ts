import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../../Common/login/login.component';

@Component({
  selector: 'app-motor-based-report',
  templateUrl: './motor-based-report.component.html',
  styleUrls: ['./motor-based-report.component.css']
})
export class MotorBasedReportComponent implements OnInit {
  jsonData: any;
  checkLogin: boolean;
  isMotorIdSelected: boolean;
  constructor(private dataservice: DataServiceService, private apiService: ApiService, private router: Router) {
    this.dataservice.getAllMotorNamePlate().subscribe((res: any[]) => {
      this.jsonData = res;
      this.checkLogin = apiService.getLoginClick();
      if (!this.checkLogin) {
        this.apiService.openModalWithComponent(LoginComponent);
      }
    });
  }
  ngOnInit() {
    this.isMotorIdSelected = false;
  }
  submit(motorId: any) {
    this.isMotorIdSelected = true;
    this.apiService.setMotorId(motorId);
  }
}
