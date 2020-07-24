import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-motor-name-plate-details-form',
  templateUrl: './motor-name-plate-details-form.component.html',
  styleUrls: ['./motor-name-plate-details-form.component.css']
})
export class MotorNamePlateDetailsFormComponent implements OnInit {
  masterDataForm: any;
  departmentMaster: any;
  submitted: boolean;
  isUpdate: boolean = false;
  spresp: any;
  motorIdValue: number;
  jsonData: any;
  jsonData2: any;
  @Output() messageEvent = new EventEmitter<boolean>();
  Data: any = "";
  constructor(public formBuilder: FormBuilder, public dataservice: DataServiceService, private apiService: ApiService, public toastr: ToastrService) {

    this.dataservice.selectActiveMakeData().subscribe((res: any[]) => {
      this.jsonData = res;
    });
    this.dataservice.getAllMotorTypeData().subscribe((res: any[]) => {
      this.jsonData2 = res;
    });

    this.Data = this.apiService.getEditMasterData();
    console.log(this.Data);


    if (this.Data == undefined) {
      this.Data = {};

    }

    this.apiService.setEditMasterData({});

    



  }

  ngOnInit() {

    this.submitted = false;
    this.masterDataForm = this.formBuilder.group({
      Motor_Name: [this.Data.Motor_Name, Validators.required],
      Frame_Size: ['', Validators.required],
      Capacity: ['', Validators.required],
      Serial_No: ['', Validators.required],
      Voltage: ['', Validators.required],
      Model_No: ['', Validators.required],
      Current: ['', Validators.required],
      Type_of_Cooling: ['', Validators.required],
      Frequency: ['', Validators.required],
      Insulation_Class: ['', Validators.required],
      Pf: ['', Validators.required],
      Ingress_Protection_Class: ['', Validators.required],
      Efficiency: ['', Validators.required],
      Duty_Cycle: ['', Validators.required],
      Manufacture_Date: ['', Validators.required],
      Weight: ['', Validators.required],
      Bearing_Det: ['', Validators.required],
      Motor_QR_Code: ['', Validators.required],
      HP: ['', Validators.required],
      kW: ['', Validators.required],
      AC_DC: ['', Validators.required],
      Phase: ['', Validators.required],
      Type_of_motor: [this.Data.Type_of_motor, Validators.required],
      service_factor: ['', Validators.required],
      Efficiency_class: ['', Validators.required],
      IP_class: ['', Validators.required],
      NBE: ['', Validators.required],
      VFD: ['', Validators.required],
    });

  }


  saveMasterData(departmentMaster: any) {
    this.submitted = true;
    if (!(this.masterDataForm.invalid)) {
      departmentMaster.custid = this.apiService.getCusId();
      departmentMaster.Motor_Id = this.Data.Motor_Id
    console.log(departmentMaster);
      if (departmentMaster.Motor_Id != null) {
      this.submitted = true;
      this.dataservice.updateMotorNamePlate(departmentMaster).subscribe(resp => {
        if (resp == true) {
          this.toastr.success("sucessfully Added")
          this.apiService.closeModal();
        }
      });
    } else {
      departmentMaster.custid = this.apiService.getCusId();
      this.submitted = true;
      this.dataservice.addAllMotorNamePlate(departmentMaster).subscribe(resp => {
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
  sendMessage(popHide: boolean) {
    this.messageEvent.emit(popHide);
  }
  get f() { return this.masterDataForm.controls; }

}
