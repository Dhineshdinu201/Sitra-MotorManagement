import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-no-load-test-results-form',
  templateUrl: './no-load-test-results-form.component.html',
  styleUrls: ['./no-load-test-results-form.component.css']
})
export class NoLoadTestResultsFormComponent implements OnInit {
  masterDataForm: any;
  departmentMaster: any;
  submitted: boolean;
  isUpdate: boolean = false;
  spresp: any;
  motorIdValue: number;
  public event: EventEmitter<any> = new EventEmitter();
  jsonData: any;
  Data: any = {};
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
      Motor_Id: [this.Data.Motor_Id, Validators.required],
      R: ['', Validators.required],
      Y: ['', Validators.required],
      B: ['', Validators.required],
      tested_on: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  saveMasterData(departmentMaster: any) {
    this.submitted = true;
    if (!(this.masterDataForm.invalid)) {
      departmentMaster.custid = this.apiService.getCusId();
      departmentMaster.load_id = this.Data.load_id;
      if (departmentMaster.load_id != null) {
        this.submitted = true;
        this.dataservice.updateNoLoadTestResultsData(departmentMaster).subscribe(resp => {
          if (resp == true) {
            this.toastr.success("sucessfully Added")
            this.apiService.closeModal();
            this.sendMessage(true);
          }
        });
      } else {
        departmentMaster.custid = this.apiService.getCusId();
        this.submitted = true;
        this.dataservice.addAllNoLoadTestResultsData(departmentMaster).subscribe(resp => {
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
