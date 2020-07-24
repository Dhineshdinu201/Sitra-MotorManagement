import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-motor-failure-tag-form',
  templateUrl: './motor-failure-tag-form.component.html',
  styleUrls: ['./motor-failure-tag-form.component.css']
})
export class MotorFailureTagFormComponent implements OnInit {
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

    this.masterDataForm = this.formBuilder.group({
      colour_code: ['', Validators.required],
      remarks: ['', Validators.required],
    });

  }

  ngOnInit() {
  }
  saveMasterData(departmentMaster: any) {
    this.submitted = true;
    if (!(this.masterDataForm.invalid)) {
      departmentMaster.custid = this.apiService.getCusId();
    departmentMaster.failure_tag_id = this.Data.failure_tag_id
    console.log(departmentMaster);
    if (departmentMaster.failure_tag_id != null) {
      this.submitted = true;
      this.dataservice.updateMotorFailureTagData(departmentMaster).subscribe(resp => {
        if (resp == true) {
          this.toastr.success("sucessfully Added")
          this.apiService.closeModal();
        }
      });
    } else {
      departmentMaster.custid = this.apiService.getCusId();
      this.submitted = true;
      this.dataservice.addAllMotorFailureTagData(departmentMaster).subscribe(resp => {
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
