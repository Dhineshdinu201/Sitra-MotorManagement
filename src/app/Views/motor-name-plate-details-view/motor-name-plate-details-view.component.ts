import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-motor-name-plate-details-view',
  templateUrl: './motor-name-plate-details-view.component.html',
  styleUrls: ['./motor-name-plate-details-view.component.css']
})
export class MotorNamePlateDetailsViewComponent implements OnInit {
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
