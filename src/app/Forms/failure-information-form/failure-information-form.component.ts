import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-failure-information-form',
  templateUrl: './failure-information-form.component.html',
  styleUrls: ['./failure-information-form.component.css']
})
export class FailureInformationFormComponent implements OnInit {
  masterDataForm: any;
  departmentMaster: any;
  submitted: boolean;
  isUpdate: boolean = false;
  spresp: any;
  motorIdValue: number;
  jsonData: any;
  @Output() messageEvent = new EventEmitter<boolean>();
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
      Motor_Id: [this.Data.Motor_Id, Validators.required],
      date_of_failure: ['', Validators.required],
      reason_id: ['', Validators.required],
      remarks: ['', Validators.required],
      date_of_re_installation: ['', Validators.required],
    });
    

    
  }
  
  ngOnInit() {
    
    this.submitted = false;

    
  }

  
  saveMasterData(departmentMaster: any) {
    this.submitted = true;
    if (!(this.masterDataForm.invalid)) {
      departmentMaster.custid = this.apiService.getCusId();
    departmentMaster.failure_id = this.Data.failure_id
    console.log(departmentMaster);
    if (departmentMaster.failure_id != null) {
      this.submitted = true;
      this.dataservice.updateMotorFailureDetailsData(departmentMaster).subscribe(resp => {
        if (resp == true) {
          this.toastr.success("sucessfully Added")
          this.apiService.closeModal();
        }
      });
    } else {
      departmentMaster.custid = this.apiService.getCusId();
      this.submitted = true;
      this.dataservice.addAllMotorFailureDetailsData(departmentMaster).subscribe(resp => {
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

