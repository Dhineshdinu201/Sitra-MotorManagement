import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-motor-movement-register-view',
  templateUrl: './motor-movement-register-view.component.html',
  styleUrls: ['./motor-movement-register-view.component.css']
})
export class MotorMovementRegisterViewComponent implements OnInit {
  d: any = {};

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.d = this.apiService.getEditMasterData();
    if (this.d == undefined) {
      this.d = {};
    }
    this.apiService.setEditMasterData({});
  }

}
