import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../../Common/data-service.service';
import { ApiService } from '../../Common/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-machinery-master-form',
  templateUrl: './machinery-master-form.component.html',
  styleUrls: ['./machinery-master-form.component.css']
})
export class MachineryMasterFormComponent implements OnInit {
  masterDataForm: any;
  departmentMaster: any;
  submitted: boolean;
  popHide: boolean;
  jsonData: any=null;
  jsonData2: any=null;
  isUpdate: boolean = false;
  public event: EventEmitter<any> = new EventEmitter();
  spresp: any;
  Data: any = {};
  constructor(public formBuilder: FormBuilder, public dataservice: DataServiceService, public apiService: ApiService, public toastr: ToastrService) {
    this.dataservice.getAllDepartmentMasterData().subscribe((res: any[]) => {
      this.jsonData = res;
    });
    this.dataservice.selectActiveMakeData().subscribe((res: any[]) => {
      this.jsonData2 = res;
    });
    this.Data = this.apiService.getEditMasterData();
    if (this.Data == undefined) {
      this.Data = {};
    }
    this.apiService.setEditMasterData({});
    this.masterDataForm = this.formBuilder.group({
      Mac_Name: ['', Validators.required],
      Dept_Code: [this.Data.Dept_Code, Validators.required],
      Make_Code: [this.Data.Make_Code, Validators.required],
      Serial_No: ['', Validators.required],
      Purchase_Date: ['', Validators.required],
      Location: ['', Validators.required],
      Mac_QR_Code: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.submitted = false;
  }
  saveMasterData(departmentMaster: any) {
    this.submitted = true;
    if (!(this.masterDataForm.invalid)) {
      departmentMaster.custid = this.apiService.getCusId();
    departmentMaster.Mac_Id = this.Data.Mac_Id;
    if (departmentMaster.Mac_Id != null) {
      this.submitted = true;
      this.dataservice.updateMachineryMasterData(departmentMaster).subscribe(resp => {
        if (resp == true) {
          this.toastr.success("sucessfully Added")
          this.apiService.closeModal();
          this.sendMessage(true);
        }
      });
    } else {
      departmentMaster.custid = this.apiService.getCusId();
      this.submitted = true;
      this.dataservice.addAllMachineryMasterData(departmentMaster).subscribe(resp => {
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
