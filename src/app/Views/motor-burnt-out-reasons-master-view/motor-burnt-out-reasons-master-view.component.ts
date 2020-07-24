import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-motor-burnt-out-reasons-master-view',
  templateUrl: './motor-burnt-out-reasons-master-view.component.html',
  styleUrls: ['./motor-burnt-out-reasons-master-view.component.css']
})
export class MotorBurntOutReasonsMasterViewComponent implements OnInit {
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
