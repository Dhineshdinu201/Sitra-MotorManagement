import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-motor-failure-tag-view',
  templateUrl: './motor-failure-tag-view.component.html',
  styleUrls: ['./motor-failure-tag-view.component.css']
})
export class MotorFailureTagViewComponent implements OnInit {
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
