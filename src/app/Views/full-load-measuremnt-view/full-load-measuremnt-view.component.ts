import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-full-load-measuremnt-view',
  templateUrl: './full-load-measuremnt-view.component.html',
  styleUrls: ['./full-load-measuremnt-view.component.css']
})
export class FullLoadMeasuremntViewComponent implements OnInit {
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
