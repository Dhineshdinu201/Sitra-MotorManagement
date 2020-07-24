import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../Common/data-service.service';
import { ApiService } from '../../../Common/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {
  masterData: any;
  jsonData: any;
  constructor(private apiService: ApiService, private dataService: DataServiceService) {
    this.masterData = this.apiService.getCriData();
    console.log(this.masterData);
    this.jsonData = this.dataService.selectActiveMotor_failure_detailsDataCric(this.masterData).subscribe((res: any[]) => {
      console.log(res);
      this.jsonData = res;
    });
  }

  ngOnInit() {

  }

}
