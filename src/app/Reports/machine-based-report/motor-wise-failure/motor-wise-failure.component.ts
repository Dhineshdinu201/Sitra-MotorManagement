import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../Common/data-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap';
import { ApiService } from '../../../Common/api.service';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from '../../../Common/login/login.component';

@Component({
  selector: 'app-motor-wise-failure',
  templateUrl: './motor-wise-failure.component.html',
  styleUrls: ['./motor-wise-failure.component.css']
})
export class MotorWiseFailureComponent implements OnInit {
  jsonData: any;
  checkLogin: boolean;
  Mac_id: any;
  constructor(public dataservice: DataServiceService, private http: HttpClient, private router: Router, private apiservice: ApiService, private modalService: BsModalService, private toastr: ToastrService) {
    //get Department Master Data
    this.Mac_id = this.apiservice.getMachineId();
    this.dataservice.selectAllMotor_effy_details(this.Mac_id).subscribe((res: any[]) => {
      this.jsonData = res;
    });
    this.checkLogin = apiservice.getLoginClick();
    if (!this.checkLogin) {
      // this.router.navigate(['/login']);
      this.apiservice.openModalWithComponent(LoginComponent);
    }
  }
  ngOnInit() {
  }

}
