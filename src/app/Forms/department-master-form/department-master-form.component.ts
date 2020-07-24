import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-department-master-form',
  templateUrl: './department-master-form.component.html',
  styleUrls: ['./department-master-form.component.css']
})
export class DepartmentMasterFormComponent implements OnInit {
  masterDataForm: any;
  departmentMaster: any;
  submitted: boolean;
  popHide: boolean;
  isUpdate: boolean = false;
  spresp: any;
  public event: EventEmitter<any> = new EventEmitter();
  Data: any = {};
  constructor(public formBuilder: FormBuilder, public dataservice: DataServiceService, public apiService: ApiService, public toastr: ToastrService) {
    this.masterDataForm = this.formBuilder.group({
      Dept_Name: ['', Validators.required],
      Dept_Shrt_Name: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.submitted = false;
    this.Data = this.apiService.getEditMasterData();
    if (this.Data == undefined) {
      this.Data = {};
    }
    this.apiService.setEditMasterData({});
  }
  saveMasterData(departmentMaster: any) {
    this.submitted = true;
    if (!(this.masterDataForm.invalid)) {
      departmentMaster.custid = this.apiService.getCusId();
      departmentMaster.Dept_Code = this.Data.Dept_Code
      if (departmentMaster.Dept_Code != null) {
        this.submitted = true;
        this.dataservice.updateDepartmentMasterData(departmentMaster).subscribe(resp => {
          if (resp == true) {
            this.toastr.success("sucessfully Added")
            this.apiService.closeModal();
            this.sendMessage(true);
          }
        });
      } else {
        departmentMaster.custid = this.apiService.getCusId();
        this.submitted = true;
        this.dataservice.addAllDepartmentMasterData(departmentMaster).subscribe(resp => {
          if (resp == true) {
            this.toastr.success("sucessfully Added")
            this.apiService.closeModal();
            this.sendMessage(true);
          }
        });
      }
    }
    else {
      this.toastr.error("Form Invalid")
    }
  }
  sendMessage(popHide: boolean) {
    this.event.emit(popHide);
  }
  get f() { return this.masterDataForm.controls; }
}
