import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-motor-burnt-out-reasons-master-form',
  templateUrl: './motor-burnt-out-reasons-master-form.component.html',
  styleUrls: ['./motor-burnt-out-reasons-master-form.component.css']
})
export class MotorBurntOutReasonsMasterFormComponent implements OnInit {
  masterDataForm: any;
  departmentMaster: any;
  submitted: boolean;
  isUpdate: boolean = false;
  spresp: any;
  public event: EventEmitter<any> = new EventEmitter();
  motorIdValue: number;
  jsonData: any;
  Data: any = {};
  constructor(public formBuilder: FormBuilder, public dataservice: DataServiceService, public apiService: ApiService, public toastr: ToastrService) {
    this.Data = this.apiService.getEditMasterData();
    if (this.Data == undefined) {
      this.Data = {};
    }
    this.apiService.setEditMasterData({});
    this.masterDataForm = this.formBuilder.group({
      reason: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.submitted = false;
  }
  saveMasterData(departmentMaster: any) {
    this.submitted = true;
    if (!(this.masterDataForm.invalid)) {
      departmentMaster.custid = this.apiService.getCusId();
    departmentMaster.register_id = this.Data.register_id
    if (departmentMaster.register_id != null) {
      this.submitted = true;
      this.dataservice.updateMotorBurntoutReasonsData(departmentMaster).subscribe(resp => {
        if (resp == true) {
          this.toastr.success("sucessfully Added")
          this.apiService.closeModal();
          this.sendMessage(true);
        }
      });
    } else {
      departmentMaster.custid = this.apiService.getCusId();
      this.submitted = true;
      this.dataservice.addAllMotorBurntoutReasonsData(departmentMaster).subscribe(resp => {
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
