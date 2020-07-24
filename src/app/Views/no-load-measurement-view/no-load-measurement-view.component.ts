import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-no-load-measurement-view',
  templateUrl: './no-load-measurement-view.component.html',
  styleUrls: ['./no-load-measurement-view.component.css']
})
export class NoLoadMeasurementViewComponent implements OnInit {
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
