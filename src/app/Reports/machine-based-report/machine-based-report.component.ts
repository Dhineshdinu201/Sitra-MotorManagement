import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../../Common/login/login.component';

@Component({
  selector: 'app-machine-based-report',
  templateUrl: './machine-based-report.component.html',
  styleUrls: ['./machine-based-report.component.css']
})
export class MachineBasedReportComponent implements OnInit {
  jsonData: any;
  checkLogin: boolean;
  isMotorIdSelected: boolean;
  constructor(private dataservice: DataServiceService, private apiService: ApiService, private router: Router) {
    this.dataservice.getActiveMachineryMasterData().subscribe((res: any[]) => {
      this.jsonData = res;
    });
    this.checkLogin = apiService.getLoginClick();
    if (!this.checkLogin) {
      this.apiService.openModalWithLoginComponent(LoginComponent);
    }
  }
  ngOnInit() {
  }
  submit(machineId: any) {
    this.isMotorIdSelected = true;
    this.apiService.setMachineId(machineId);
  }
}
