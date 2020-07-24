import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-motor-movement-register-form',
  templateUrl: './motor-movement-register-form.component.html',
  styleUrls: ['./motor-movement-register-form.component.css']
})
export class MotorMovementRegisterFormComponent implements OnInit {
  masterDataForm: any;
  departmentMaster: any;
  submitted: boolean;
  isUpdate: boolean = false;
  spresp: any;
  public event: EventEmitter<any> = new EventEmitter();
  motorIdValue: number;
  jsonData: any;
  Data: any = '';
  constructor(public formBuilder: FormBuilder, public dataservice: DataServiceService, public apiService: ApiService, public toastr: ToastrService) {
    this.dataservice.getActiveMotorNamePlate().subscribe((res: any[]) => {
      this.jsonData = res;
    });
    this.Data = this.apiService.getEditMasterData();
    if (this.Data == undefined) {
      this.Data = {};
    }
    this.apiService.setEditMasterData({});
    this.masterDataForm = this.formBuilder.group({
      motor_id: [this.Data.motor_id, Validators.required],
      mov_date: ['', Validators.required],
      mov_type: [this.Data.mov_type, Validators.required],
      mov_reason: ['', Validators.required],
      from_machine: ['', Validators.required],
      to_machine: ['', Validators.required],
    });

  }
  ngOnInit() {
  }
  saveMasterData(departmentMaster: any) {
    this.submitted = true;
    if (!(this.masterDataForm.invalid)) {
      departmentMaster.custid = this.apiService.getCusId();
      departmentMaster.failure_tag_id = this.Data.failure_tag_id
      if (departmentMaster.failure_tag_id != null) {
        this.submitted = true;
        this.dataservice.updateMotorMovementRegisterData(departmentMaster).subscribe(resp => {
          if (resp == true) {
            this.toastr.success("sucessfully Added")
            this.apiService.closeModal();
            this.sendMessage(true);
          }
        });
      } else {
        departmentMaster.custid = this.apiService.getCusId();
        this.submitted = true;
        this.dataservice.addAllMotorMovementRegisterData(departmentMaster).subscribe(resp => {
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
