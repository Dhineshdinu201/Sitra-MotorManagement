import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../../Common/data-service.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../Common/api.service';
import { LoginComponent } from '../../Common/login/login.component';

@Component({
  selector: 'app-criteria-based-report',
  templateUrl: './criteria-based-report.component.html',
  styleUrls: ['./criteria-based-report.component.css']
})
export class CriteriaBasedReportComponent implements OnInit {
  percent: string[] = [];
  masterDataForm: any;
  jsonData: any;
  type: any;
  checkLogin: boolean;
  isMotorIdSelected: boolean;
  submitted: boolean;
  constructor(public formBuilder: FormBuilder, private apiService: ApiService, private dataService: DataServiceService, private toastr: ToastrService) { }
  ngOnInit() {
    this.percent.push("80");
    this.percent.push("70");
    this.percent.push("60");
    this.percent.push("50");
    this.percent.push("40");
    this.percent.push("30");
    this.percent.push("20");
    this.percent.push("10");
    this.submitted = false;
    this.masterDataForm = this.formBuilder.group({
      percent: [''],
      number: [''],
      type: ['', Validators.required],
    });
    this.checkLogin = this.apiService.getLoginClick();
    if (!this.checkLogin) {
      this.apiService.openModalWithLoginComponent(LoginComponent);
    }
  }
  saveMasterData(departmentMaster: any) {
    this.submitted = true;
    if (!(this.masterDataForm.invalid)) {

      this.apiService.setCriData(departmentMaster);
      this.isMotorIdSelected = true;
    } else {
      this.toastr.error("Input Invalid");
    }
  }
  get f() { return this.masterDataForm.controls; }
}
