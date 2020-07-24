import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from '../api.service';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<boolean>();
  menulist: string[] = [];
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
  customClass = 'customClass';
  constructor(private router: Router,private apiService: ApiService) { }

  ngOnInit() {
    this.masterData.push("Deparment");
    this.masterData.push("Make");
    this.masterData.push("Machinery");
    this.masterData.push("Motor Type");
    this.masterData.push("Motor Burnt Out Reason");
    this.masterData.push("Motor Failure Tags");

    this.motorMasterData.push("Motor Name Plate Details");
    this.motorMasterData.push("Motor Location details");

    this.menulist.push("Deparment");
    this.menulist.push("Make");
    this.menulist.push("Machinery");
    this.menulist.push("Motor Details");

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
  click(index) {
      this.messageEvent.emit(true)
    if (index == 4) {
      this.router.navigate(['/MotorNamePlateList']);
    }
    if (index == 5) {
      this.router.navigate(['/MotorDetailsList']);
    }
    if (index == 6) {
      this.router.navigate(['/NoLoadTestResultList']);
    }
    if (index == 7) {
      this.router.navigate(['/NoLoadMeasurementList']);
    }
    if (index == 8) {
      this.router.navigate(['/NoLoadPowerMeasurements']);
    }
    if (index == 9) {
      this.router.navigate(['/FullLoadMeasurements']);
    }
    if (index == 10) {
      this.router.navigate(['/MotorFailureTagList']);
    }
    if (index == 11) {
      this.router.navigate(['/MotorBurnsOutReasonList']);
    }
    if (index == 12) {
      this.router.navigate(['/FailureInformationList']);
    }
    if (index == 13) {
      this.router.navigate(['/MotorMovementRegisterList']);
    }
    this.selectedIndex = index;
    this.apiService.isMenuClick = true;
    window.scroll(0,0);
  }
  clickMotorTech(index) {
    this.selectedMotorTech = index;
    this.apiService.isMenuClick = true;
    this.messageEvent.emit(true);
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
    this.selectedMasterData = index;
    this.apiService.isMenuClick = true;
    this.messageEvent.emit(true);
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
    this.selectedMotorMasterData = index;
    this.apiService.isMenuClick = true;
    this.messageEvent.emit(true);
    this.isReportClick = false;
    this.isMotorFailure = false;
    this.isMotorMovement = false;
    window.scroll(0, 0);
    this.isEfficiencyCalculation = false;
    if (index == 0) {
      this.router.navigate(['/MotorNamePlateList']);
    } if (index == 1) {
      this.router.navigate(['/MotorDetailsList']);
    }
  }
  motorFailure() {
    this.isReportClick = false;
    this.isMotorFailure = true;
    this.isMotorMovement = false;
    this.isEfficiencyCalculation = false;
    this.selectedMasterData = null;
    this.selectedMotorMasterData = null;
    this.apiService.isMenuClick = true;
    this.messageEvent.emit(true);
    window.scroll(0, 0);
    this.router.navigate(['/FailureInformationList']);
  }
  motorMovement() {
    window.scroll(0, 0);
    this.isMotorFailure = false;
    this.isMotorMovement = true;
    this.isReportClick = false;
    this.isEfficiencyCalculation = false;
    this.selectedMasterData = null;
    this.selectedMotorMasterData = null;
    this.apiService.isMenuClick = true;
    this.messageEvent.emit(true);
    this.router.navigate(['/MotorMovementRegisterList']);
  }
  efficiencyCalculation() {
    window.scroll(0, 0);
    this.isMotorFailure = false;
    this.isMotorMovement = false;
    this.isEfficiencyCalculation = true;
    this.isReportClick = false;
    this.selectedMasterData = null;
    this.selectedMotorMasterData = null;
    this.apiService.isMenuClick = true;
    this.messageEvent.emit(true);
    this.router.navigate(['/motorEfficiency']);
  }
  clickReport(index) {
    window.scroll(0, 0);
    this.isMotorFailure = false;
    this.isReportClick = true;
    this.isMotorMovement = false;
    this.isEfficiencyCalculation = false;
    this.selectedMasterData = null;
    this.selectedMotorMasterData = null;
    this.apiService.isMenuClick = true;
    this.messageEvent.emit(true);
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
}
