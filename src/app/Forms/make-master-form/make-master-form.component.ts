import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-make-master-form',
  templateUrl: './make-master-form.component.html',
  styleUrls: ['./make-master-form.component.css']
})
export class MakeMasterFormComponent implements OnInit {
  masterDataForm: any;
  departmentMaster: any;
  submitted: boolean;
  isUpdate: boolean = false;
  spresp: any;
  motorIdValue: number;
  jsonData: any;
  Data: any = {};
  constructor(public formBuilder: FormBuilder, public dataservice: DataServiceService, public apiService: ApiService, public toastr: ToastrService) {
    this.Data = this.apiService.getEditMasterData();
    console.log(this.Data);


    if (this.Data == undefined) {
      this.Data = {};
    }

    this.apiService.setEditMasterData({});
    this.masterDataForm = this.formBuilder.group({
      Make_Name: ['', Validators.required],
      Make_Shrt_Name: ['', Validators.required],
    });

  }

  ngOnInit() {
    this.submitted = false;
  }
  saveMasterData(departmentMaster: any) {
    this.submitted = true;
    if (!(this.masterDataForm.invalid)) {
      departmentMaster.custid = this.apiService.getCusId();
      departmentMaster.Make_Code = this.Data.Make_Code
      console.log(departmentMaster);
      if (departmentMaster.Make_Code != null) {
        this.submitted = true;
        this.dataservice.updateMakeMasterData(departmentMaster).subscribe(resp => {
          if (resp == true) {
            this.toastr.success("sucessfully Added")
            this.apiService.closeModal();
          }
        });
      } else {
        departmentMaster.custid = this.apiService.getCusId();
        this.submitted = true;
        this.dataservice.addAllMakeMasterData(departmentMaster).subscribe(resp => {
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
