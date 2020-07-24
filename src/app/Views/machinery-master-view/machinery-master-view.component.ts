import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-machinery-master-view',
  templateUrl: './machinery-master-view.component.html',
  styleUrls: ['./machinery-master-view.component.css']
})
export class MachineryMasterViewComponent implements OnInit {
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
