import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';


@Component({
  selector: 'app-department-master-view',
  templateUrl: './department-master-view.component.html',
  styleUrls: ['./department-master-view.component.css']
})
export class DepartmentMasterViewComponent implements OnInit {
  Data: any = {};
  
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.Data = this.apiService.getEditMasterData();
    if (this.Data == undefined) {
      this.Data = {};
    }
    this.apiService.setEditMasterData({});
  }

}
