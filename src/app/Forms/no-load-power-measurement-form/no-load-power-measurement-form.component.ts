import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-no-load-power-measurement-form',
  templateUrl: './no-load-power-measurement-form.component.html',
  styleUrls: ['./no-load-power-measurement-form.component.css']
})
export class NoLoadPowerMeasurementFormComponent implements OnInit {
  masterDataForm: any;
  departmentMaster: any;
  submitted: boolean;
  isUpdate: boolean = false;
  spresp: any;
  motorIdValue: number;
  jsonData: any;
  Data: any = {};
  constructor(public formBuilder: FormBuilder, public dataservice: DataServiceService, public apiService: ApiService, public toastr: ToastrService) {

    this.dataservice.getActiveMotorNamePlate().subscribe((res: any[]) => {
      this.jsonData = res;
    });
    this.Data = this.apiService.getEditMasterData();
    console.log(this.Data);


    if (this.Data == undefined) {
      this.Data = {};
    }

    this.apiService.setEditMasterData({});
    console.log(this.Data.motor_id);
    this.masterDataForm = this.formBuilder.group({
      Motor_Id: [this.Data.Motor_Id, Validators.required],
      serial_number: ['', Validators.required],
      noload_power_bef_fail_1: ['', Validators.required],
      noload_power_bef_fail_2: ['', Validators.required]
      
    });

  }

  ngOnInit() {
  }
  saveMasterData(departmentMaster: any) {
    this.submitted = true;
    if (!(this.masterDataForm.invalid)) {
    departmentMaster.custid = this.apiService.getCusId();
    departmentMaster.Motor_Type_Code = this.Data.Motor_Type_Code;
    console.log(departmentMaster);
    if (departmentMaster.Motor_Type_Code != null) {
      this.submitted = true;
      this.dataservice.updateNoLoadPowerMeasurementsData(departmentMaster).subscribe(resp => {
        if (resp == true) {
          this.toastr.success("sucessfully Added")
        }
      });
    } else {
      departmentMaster.custid = this.apiService.getCusId();
      this.submitted = true;
      this.dataservice.addAllNoLoadPowerMeasurementsData(departmentMaster).subscribe(resp => {
        if (resp == true) {
          this.toastr.success("sucessfully Added")
          this.apiService.closeModal();
        }
      });

    }
  } else {
  this.toastr.error("Form Invalid")
}
  }
  get f() { return this.masterDataForm.controls; }
}
