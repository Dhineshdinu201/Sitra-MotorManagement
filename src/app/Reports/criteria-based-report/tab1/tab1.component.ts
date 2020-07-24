import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Common/api.service';
import { DataServiceService } from '../../../Common/data-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {
  masterData: any;
  jsonData: any;
  constructor(private apiService: ApiService, private dataService: DataServiceService) {
    this.masterData = this.apiService.getCriData();
    console.log(this.masterData);
    this.jsonData = this.dataService.selectAllMotor_effy_detailsCrit().subscribe((res: any[]) => {
      console.log(res);
      this.jsonData = res;
    });
  }

  ngOnInit() {
   
  }

}
