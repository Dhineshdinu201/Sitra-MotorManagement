import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Common/login/login.component';
import { DepartmentMasterListComponent } from './List/department-master-list/department-master-list.component';
import { MakeMasterListComponent } from './List/make-master-list/make-master-list.component';
import { MachineryMasterListComponent } from './List/machinery-master-list/machinery-master-list.component';
import { MotorTypeMasterListComponent } from './List/motor-type-master-list/motor-type-master-list.component';
import { MotorNamePlateListComponent } from './List/motor-name-plate-list/motor-name-plate-list.component';
import { MotorDetailsListComponent } from './List/motor-details-list/motor-details-list.component';
import { NoLoadTestResultsListComponent } from './List/no-load-test-results-list/no-load-test-results-list.component';
import { NoLoadMeasurementsComponent } from './List/no-load-measurements/no-load-measurements.component';
import { NoLoadPowerMeasurementsComponent } from './List/no-load-power-measurements/no-load-power-measurements.component';
import { FullLoadMeasurementsComponent } from './List/full-load-measurements/full-load-measurements.component';
import { MotorFailureTagComponent } from './List/motor-failure-tag/motor-failure-tag.component';
import { MotorBurntOutReasonMasterListComponent } from './List/motor-burnt-out-reason-master-list/motor-burnt-out-reason-master-list.component';
import { FailureInformationComponent } from './List/failure-information/failure-information.component';
import { MotorMovementRegisterComponent } from './List/motor-movement-register/motor-movement-register.component';
import { MotorBasedReportComponent } from './Reports/motor-based-report/motor-based-report.component';
import { MotorEfficienyDetailsComponent } from './Reports/motor-based-report/motor-efficieny-details/motor-efficieny-details.component';
import { MachineBasedReportComponent } from './Reports/machine-based-report/machine-based-report.component';
import { CriteriaBasedReportComponent } from './Reports/criteria-based-report/criteria-based-report.component';
import { MotorMovementRegisterReportComponent } from './Reports/motor-movement-register-report/motor-movement-register-report.component';
import { MotorFailureReportComponent } from './Reports/motor-failure-report/motor-failure-report.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent
  },
  {
    path: "DepartmentMaster", component: DepartmentMasterListComponent
  },
  {
    path: "MakeMaster", component: MakeMasterListComponent
  },
  {
    path: "MakeMasterList", component: MakeMasterListComponent
  },
  {
    path: "MachineryMaster", component: MachineryMasterListComponent
  },
  {
    path: "MachineryMasterList", component: MachineryMasterListComponent
  },
  {
    path: "MasterList", component: DepartmentMasterListComponent
  },
  {
    path: "MotorTypeList", component: MotorTypeMasterListComponent
  },
  {
    path: "MotorNamePlateList", component: MotorNamePlateListComponent
  },
  {
    path: "MotorDetailsList", component: MotorDetailsListComponent
  },
  {
    path: "NoLoadTestResultList", component: NoLoadTestResultsListComponent
  },
  {
    path: "NoLoadMeasurementList", component: NoLoadMeasurementsComponent
  },
  {
    path: "NoLoadPowerMeasurements", component: NoLoadPowerMeasurementsComponent
  },
  {
    path: "FullLoadMeasurements", component: FullLoadMeasurementsComponent
  },
  {
    path: "MotorFailureTagList", component: MotorFailureTagComponent
  },
  {
    path: "MotorBurnsOutReasonList", component: MotorBurntOutReasonMasterListComponent
  },
  {
    path: "FailureInformationList", component: FailureInformationComponent
  },
  {
    path: "MotorMovementRegisterList", component: MotorMovementRegisterComponent
  },
  {
    path: "MotorEfficencyDetails", component: MotorEfficienyDetailsComponent
  },
  {
    path: "MotorBasedReport", component: MotorBasedReportComponent
  },
  {
    path: "MachineBasedReport", component: MachineBasedReportComponent
  },
  {
    path: "criteriaBasedReport", component: CriteriaBasedReportComponent
  },
  { path: "motorMovementReport", component: MotorMovementRegisterReportComponent },
  { path: "motorFailureReport", component: MotorFailureReportComponent },
  {
    path: "motorEfficiency", component: MotorEfficienyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
