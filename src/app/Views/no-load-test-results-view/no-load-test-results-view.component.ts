import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-no-load-test-results-view',
  templateUrl: './no-load-test-results-view.component.html',
  styleUrls: ['./no-load-test-results-view.component.css']
})
export class NoLoadTestResultsViewComponent implements OnInit {
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
