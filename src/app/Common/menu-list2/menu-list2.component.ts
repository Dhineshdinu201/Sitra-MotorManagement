import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu-list2',
  templateUrl: './menu-list2.component.html',
  styleUrls: ['./menu-list2.component.css']
})
export class MenuList2Component implements OnInit {

  masterData: string[] = [];
  motorMasterData: string[] = [];
  motorTechnicalDetails: string[] = [];
  Reports: string[] = [];
  isMotorFailure: boolean = false;
  isMotorMovement: boolean = false;
  isReportClick: boolean = false;
  isEfficiencyCalculation: boolean = false;
  selectedIndex: number = null;
  selectedMasterData: number = null;
  selectedMotorMasterData: number = null;
  selectedMotorTech: number = null;

  isMenu1: boolean = false;
  isMenu2: boolean = false;
  isMenu3: boolean = false;
  isMenu4: boolean = false;

  constructor(private router: Router, private apiService: ApiService) {
      this.masterData.push("Deparment");
      this.masterData.push("Make");
      this.masterData.push("Machinery");
      this.masterData.push("Motor Type");
      this.masterData.push("Motor Burnt Out Reason");
      this.masterData.push("Motor Failure Tags");

      this.motorMasterData.push("Motor Name Plate Details");
      this.motorMasterData.push("Motor Location details");

      this.motorTechnicalDetails.push("No Load Test Results");
      this.motorTechnicalDetails.push("No Load Measurement");
      this.motorTechnicalDetails.push("No Load Power Measurements");
      this.motorTechnicalDetails.push("Full Load Measurements");



      this.Reports.push("Motor based report");
      this.Reports.push("Machine based report");
      this.Reports.push("Criteria based query report ");
      this.Reports.push("Motor change report");
      this.Reports.push("Motor failure report");
    }

    ngOnInit() {
     
    }
  clickMotorTech(index) {
    this.isMenu1 = false;
    this.isMenu2 = false;
    this.isMenu3 = true;
    this.isMenu4 = false;



    this.selectedMotorTech = index;
    this.apiService.isMenuClick = true;
    //this.messageEvent.emit(true);
    this.isMotorFailure = false;
    this.isEfficiencyCalculation = false;
    this.isMotorMovement = false;
    this.isReportClick = false;
    this.isEfficiencyCalculation = false;
    window.scroll(0, 0);
    if (index == 0) {
      this.router.navigate(['/NoLoadTestResultList']);
    }
    if (index == 1) {
      this.router.navigate(['/NoLoadMeasurementList']);
    }
    if (index == 2) {
      this.router.navigate(['/NoLoadPowerMeasurements']);
    }
    if (index == 3) {
      this.router.navigate(['/FullLoadMeasurements']);
    }
  }
  clickMasterData(index) {
    this.isMenu1 = true;
    this.isMenu2 = false;
    this.isMenu3 = false;
    this.isMenu4 = false;




    this.selectedMotorTech = index;
    this.apiService.isMenuClick = true;
    //this.messageEvent.emit(true);
    this.isMotorFailure = false;
    this.isEfficiencyCalculation = false;
    this.isMotorMovement = false;
    this.isReportClick = false;
    this.isEfficiencyCalculation = false;
    window.scroll(0, 0);
    if (index == 0) {
      this.router.navigate(['/MasterList']);
    } if (index == 1) {
      this.router.navigate(['/MakeMasterList']);
    }
    if (index == 2) {
      this.router.navigate(['/MachineryMasterList']);
    }
    if (index == 3) {
      this.router.navigate(['/MotorTypeList']);
    }
    if (index == 4) {
      this.router.navigate(['/MotorBurnsOutReasonList']);
    }
    if (index == 5) {
      this.router.navigate(['/MotorFailureTagList']);
    }
  }
  clickMotorMasterData(index) {
    this.isMenu1 = false;
    this.isMenu2 = true;
    this.isMenu3 = false;
    this.isMenu4 = false;


    this.selectedMotorTech = index;
    this.apiService.isMenuClick = true;
    //this.messageEvent.emit(true);
    this.isMotorFailure = false;
    this.isEfficiencyCalculation = false;
    this.isMotorMovement = false;
    this.isReportClick = false;
    this.isEfficiencyCalculation = false;
    if (index == 0) {
      this.router.navigate(['/MotorNamePlateList']);
    } if (index == 1) {
      this.router.navigate(['/MotorDetailsList']);
    }
  }

  motorFailure() {
    //this.selectedMotorTech = index;
    this.apiService.isMenuClick = true;
    //this.messageEvent.emit(true);
    this.isMotorFailure = false;
    this.isEfficiencyCalculation = false;
    this.isMotorMovement = false;
    this.isReportClick = false;
    this.isEfficiencyCalculation = false;
    window.scroll(0, 0);
    this.router.navigate(['/FailureInformationList']);
  }
  motorMovement() {
    window.scroll(0, 0);
    //this.selectedMotorTech = index;
    this.apiService.isMenuClick = true;
    //this.messageEvent.emit(true);
    this.isMotorFailure = false;
    this.isEfficiencyCalculation = false;
    this.isMotorMovement = false;
    this.isReportClick = false;
    this.isEfficiencyCalculation = false;
    this.router.navigate(['/MotorMovementRegisterList']);
  }
  efficiencyCalculation() {
    window.scroll(0, 0);
    //this.selectedMotorTech = index;
    this.apiService.isMenuClick = true;
    //this.messageEvent.emit(true);
    this.isMotorFailure = false;
    this.isEfficiencyCalculation = false;
    this.isMotorMovement = false;
    this.isReportClick = false;
    this.isEfficiencyCalculation = false;
    this.router.navigate(['/motorEfficiency']);
  }
  clickReport(index) {
    this.isMenu1 = false;
    this.isMenu2 = false;
    this.isMenu3 = false;
    this.isMenu4 = true;



    window.scroll(0, 0);
    this.selectedMotorTech = index;
    this.apiService.isMenuClick = true;
    //this.messageEvent.emit(true);
    this.isMotorFailure = false;
    this.isEfficiencyCalculation = false;
    this.isMotorMovement = false;
    this.isReportClick = false;
    this.isEfficiencyCalculation = false;
    if (index == 0) {
      this.router.navigate(['/MotorBasedReport']);
    }
    if (index == 1) {
      this.router.navigate(['/MachineBasedReport']);
    }
    if (index == 2) {
      this.router.navigate(['/criteriaBasedReport']);
    }
    if (index == 3) {
      this.router.navigate(['/motorMovementReport']);
    }
    if (index == 4) {
      this.router.navigate(['/motorFailureReport']);
    }
  }
  collapseAll() {
    this.isMenu1 = false;
    this.isMenu2 = false;
    this.isMenu3 = false;
    this.isMenu4 = false;
  }
}
