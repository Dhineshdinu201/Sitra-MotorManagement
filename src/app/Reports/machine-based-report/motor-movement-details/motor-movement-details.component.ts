import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../Common/data-service.service';
import { ApiService } from '../../../Common/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motor-movement-details',
  templateUrl: './motor-movement-details.component.html',
  styleUrls: ['./motor-movement-details.component.css']
})
export class MotorMovementDetailsComponent implements OnInit {
  jsonData: any;
  isMotorIdSelected: boolean;
  constructor(private dataservice: DataServiceService, private apiService: ApiService, private router: Router) {
    this.dataservice.getAllMotorMovementRegisterData().subscribe((res: any[]) => {
      this.jsonData = res;
    });
  }
  ngOnInit() {
  }
  submit(machineId: any) {
    this.isMotorIdSelected = true;
    this.apiService.setMachineId(machineId);
  }
}
