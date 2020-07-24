import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-motor-details-form',
  templateUrl: './motor-details-form.component.html',
  styleUrls: ['./motor-details-form.component.css']
})
export class MotorDetailsFormComponent implements OnInit {
  masterDataForm: any;
  departmentMaster: any;
  submitted: boolean;
  isUpdate: boolean = false;
  spresp: any;
  motorIdValue: number;
  public event: EventEmitter<any> = new EventEmitter();
  jsonData: any;
  jsonData2: any;
  jsonData3: any;
  Data: any = {};
  constructor(public formBuilder: FormBuilder, public dataservice: DataServiceService, public apiService: ApiService, public toastr: ToastrService) {
    this.dataservice.getActiveMotorNamePlate().subscribe((res: any[]) => {
      this.jsonData = res;
    });
    this.dataservice.getActiveMachineryMasterData().subscribe((res: any[]) => {
      this.jsonData2 = res;
    });
    this.dataservice.selectActiveMakeData().subscribe((res: any[]) => {
      this.jsonData3 = res;
    });
    this.Data = this.apiService.getEditMasterData();
    if (this.Data == undefined) {
      this.Data = {};
    }
    this.apiService.setEditMasterData({});

    this.masterDataForm = this.formBuilder.group({
      Motor_Id: [this.Data.Motor_Id, Validators.required],
      Motor_number: ['', Validators.required],
      macconnected_stock: ['', Validators.required],
      serving_section: ['', Validators.required],
      connected_machine: [this.Data.connected_machine, Validators.required],
      driving_part: [this.Data.driving_part, Validators.required],
      motor_classification: ['', Validators.required],
      motor_mac_coupling: ['', Validators.required],
      purchase_reason: ['', Validators.required],
      purchase_date: ['', Validators.required],
    });
  }
  ngOnInit() {
  }
  saveMasterData(departmentMaster: any) {
    this.submitted = true;
    if (!(this.masterDataForm.invalid)) {
      departmentMaster.custid = this.apiService.getCusId();
      departmentMaster.Motor_Det_Id = this.Data.Motor_Det_Id
      if (departmentMaster.Motor_Det_Id != null) {
        this.submitted = true;
        this.dataservice.updateMotorDetails(departmentMaster).subscribe(resp => {
          if (resp == true) {
            this.toastr.success("sucessfully Added")
            this.apiService.closeModal();
            this.sendMessage(true);
          }
        });
      } else {
        departmentMaster.custid = this.apiService.getCusId();
        this.submitted = true;
        this.dataservice.addAllMotorDetails(departmentMaster).subscribe(resp => {
          if (resp == true) {
            this.toastr.success("sucessfully Added")
            this.apiService.closeModal();
            this.sendMessage(true);
          }
        });
      }
    } else {
      this.toastr.error("Form Invalid")
    }
  }
  sendMessage(popHide: boolean) {
    this.event.emit(popHide);
  }
  get f() { return this.masterDataForm.controls; }
}
