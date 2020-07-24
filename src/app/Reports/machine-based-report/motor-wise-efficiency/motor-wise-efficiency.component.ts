import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../Common/data-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../../Common/api.service';
import { BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from '../../../Common/login/login.component';

@Component({
  selector: 'app-motor-wise-efficiency',
  templateUrl: './motor-wise-efficiency.component.html',
  styleUrls: ['./motor-wise-efficiency.component.css']
})
export class MotorWiseEfficiencyComponent implements OnInit {
  jsonData: any;
  checkLogin: boolean;
  Mac_id: any;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {

    //get Department Master Data
    this.Mac_id = this.apiservice.getMachineId();
    this.dataservice.selectActiveMotor_failure_detailsData(this.Mac_id).subscribe((res: any[]) => {
      console.log(res);
      this.jsonData = res;
    });

    console.log(this.jsonData);
    this.checkLogin = apiservice.getLoginClick();
    if (!this.checkLogin) {
      // this.router.navigate(['/login']);
      this.apiservice.openModalWithComponent(LoginComponent);
    }
  }
  ngOnInit() {
  }

}
