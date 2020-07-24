import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-motor-type-master-view',
  templateUrl: './motor-type-master-view.component.html',
  styleUrls: ['./motor-type-master-view.component.css']
})
export class MotorTypeMasterViewComponent implements OnInit {
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
