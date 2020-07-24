import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-failure-information-view',
  templateUrl: './failure-information-view.component.html',
  styleUrls: ['./failure-information-view.component.css']
})
export class FailureInformationViewComponent implements OnInit {
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
