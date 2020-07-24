import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AccordionModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';

import { DepartmentMasterViewComponent } from './Views/department-master-view/department-master-view.component';
import { MakeMasterViewComponent } from './Views/make-master-view/make-master-view.component';
import { MachineryMasterViewComponent } from './Views/machinery-master-view/machinery-master-view.component';
import { MotorTypeMasterViewComponent } from './Views/motor-type-master-view/motor-type-master-view.component';
import { MotorNamePlateDetailsViewComponent } from './Views/motor-name-plate-details-view/motor-name-plate-details-view.component';
import { MotorDetailsViewComponent } from './Views/motor-details-view/motor-details-view.component';
import { NoLoadTestResultsViewComponent } from './Views/no-load-test-results-view/no-load-test-results-view.component';
import { NoLoadMeasurementViewComponent } from './Views/no-load-measurement-view/no-load-measurement-view.component';
import { NoLoadPowerMeasurementViewComponent } from './Views/no-load-power-measurement-view/no-load-power-measurement-view.component';
import { FullLoadMeasuremntViewComponent } from './Views/full-load-measuremnt-view/full-load-measuremnt-view.component';
import { MotorFailureTagViewComponent } from './Views/motor-failure-tag-view/motor-failure-tag-view.component';
import { MotorBurntOutReasonsMasterViewComponent } from './Views/motor-burnt-out-reasons-master-view/motor-burnt-out-reasons-master-view.component';
import { FailureInformationViewComponent } from './Views/failure-information-view/failure-information-view.component';
import { MotorMovementRegisterViewComponent } from './Views/motor-movement-register-view/motor-movement-register-view.component';
import { DepartmentMasterFormComponent } from './Forms/department-master-form/department-master-form.component';
import { MakeMasterFormComponent } from './Forms/make-master-form/make-master-form.component';
import { MotorTypeMasterFormComponent } from './Forms/motor-type-master-form/motor-type-master-form.component';
import { MotorNamePlateDetailsFormComponent } from './Forms/motor-name-plate-details-form/motor-name-plate-details-form.component';
import { MotorDetailsFormComponent } from './Forms/motor-details-form/motor-details-form.component';
import { NoLoadTestResultsFormComponent } from './Forms/no-load-test-results-form/no-load-test-results-form.component';
import { NoLoadMeasurementFormComponent } from './Forms/no-load-measurement-form/no-load-measurement-form.component';
import { NoLoadPowerMeasurementFormComponent } from './Forms/no-load-power-measurement-form/no-load-power-measurement-form.component';
import { FullLoadMeasuremntFormComponent } from './Forms/full-load-measuremnt-form/full-load-measuremnt-form.component';
import { MotorFailureTagFormComponent } from './Forms/motor-failure-tag-form/motor-failure-tag-form.component';
import { MotorBurntOutReasonsMasterFormComponent } from './Forms/motor-burnt-out-reasons-master-form/motor-burnt-out-reasons-master-form.component';
import { FailureInformationFormComponent } from './Forms/failure-information-form/failure-information-form.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { MachineryMasterFormComponent } from './Forms/machinery-master-form/machinery-master-form.component';
import { AppHeaderComponent } from './Common/app-header/app-header.component';
import { LogoutComponent } from './Common/logout/logout.component';
import { LoginComponent } from './Common/login/login.component';
import { MenuListComponent } from './Common/menu-list/menu-list.component';
import { DepartmentMasterListComponent } from './List/department-master-list/department-master-list.component';
import { MachineryMasterListComponent } from './List/machinery-master-list/machinery-master-list.component';
import { MakeMasterListComponent } from './List/make-master-list/make-master-list.component';
import { MotorNamePlateListComponent } from './List/motor-name-plate-list/motor-name-plate-list.component';
import { MotorTypeMasterListComponent } from './List/motor-type-master-list/motor-type-master-list.component';
import { MotorDetailsListComponent } from './List/motor-details-list/motor-details-list.component';
import { NoLoadTestResultsListComponent } from './List/no-load-test-results-list/no-load-test-results-list.component';
import { NoLoadMeasurementsComponent } from './List/no-load-measurements/no-load-measurements.component';
import { NoLoadPowerMeasurementsComponent } from './List/no-load-power-measurements/no-load-power-measurements.component';
import { MotorFailureTagComponent } from './List/motor-failure-tag/motor-failure-tag.component';
import { FullLoadMeasurementsComponent } from './List/full-load-measurements/full-load-measurements.component';
import { MotorBurntOutReasonMasterListComponent } from './List/motor-burnt-out-reason-master-list/motor-burnt-out-reason-master-list.component';
import { FailureInformationComponent } from './List/failure-information/failure-information.component';
import { MotorMovementRegisterComponent } from './List/motor-movement-register/motor-movement-register.component';

import { MotorMovementRegisterFormComponent } from './Forms/motor-movement-register-form/motor-movement-register-form.component';
import { MotorBasedReportComponent } from './Reports/motor-based-report/motor-based-report.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MotorNamePlateReportComponent } from './Reports/motor-based-report/motor-name-plate-report/motor-name-plate-report.component';
import { MotorDetailReportComponent } from './Reports/motor-based-report/motor-detail-report/motor-detail-report.component';
import { NoLoadMeasurementsReportsComponent } from './Reports/motor-based-report/no-load-measurements-reports/no-load-measurements-reports.component';
import { NoLoadTestResultsReportComponent } from './Reports/motor-based-report/no-load-test-results-report/no-load-test-results-report.component';
import { NoLoadPowerMeasurementReportComponent } from './Reports/motor-based-report/no-load-power-measurement-report/no-load-power-measurement-report.component';
import { FullLoadMeasurementsReportComponent } from './Reports/motor-based-report/full-load-measurements-report/full-load-measurements-report.component';
import { MotorFailureINformationReportComponent } from './Reports/motor-based-report/motor-failure-information-report/motor-failure-information-report.component';
import { MotorEfficienyDetailsComponent } from './Reports/motor-based-report/motor-efficieny-details/motor-efficieny-details.component';
import { MachineBasedReportComponent } from './Reports/machine-based-report/machine-based-report.component';
import { MotorWiseFailureComponent } from './Reports/machine-based-report/motor-wise-failure/motor-wise-failure.component';
import { MotorWiseEfficiencyComponent } from './Reports/machine-based-report/motor-wise-efficiency/motor-wise-efficiency.component';
import { MotorMovementDetailsComponent } from './Reports/machine-based-report/motor-movement-details/motor-movement-details.component';
import { CriteriaBasedReportComponent } from './Reports/criteria-based-report/criteria-based-report.component';
import { Tab1Component } from './Reports/criteria-based-report/tab1/tab1.component';
import { Tab2Component } from './Reports/criteria-based-report/tab2/tab2.component';
import { MotorMovementRegisterReportComponent } from './Reports/motor-movement-register-report/motor-movement-register-report.component';
import { MotorFailureReportComponent } from './Reports/motor-failure-report/motor-failure-report.component';
import { UserComponent } from './Common/user/user.component';
import { MenuList2Component } from './Common/menu-list2/menu-list2.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LogoutComponent,
    LoginComponent,
    MenuListComponent,
    DepartmentMasterListComponent,
    MachineryMasterListComponent,
    MakeMasterListComponent,
    MotorTypeMasterListComponent,
    MotorNamePlateListComponent,
    MotorDetailsListComponent,
    NoLoadTestResultsListComponent,
    NoLoadMeasurementsComponent,
    NoLoadPowerMeasurementsComponent,
    FullLoadMeasurementsComponent,
    MotorFailureTagComponent,
    MotorBurntOutReasonMasterListComponent,
    FailureInformationComponent,
    MotorMovementRegisterComponent,
    DepartmentMasterViewComponent,
    MakeMasterViewComponent,
    MachineryMasterViewComponent,
    MotorTypeMasterViewComponent,
    MotorNamePlateDetailsViewComponent,
    MotorDetailsViewComponent,
    NoLoadTestResultsViewComponent,
    NoLoadMeasurementViewComponent,
    NoLoadPowerMeasurementViewComponent,
    FullLoadMeasuremntViewComponent,
    MotorFailureTagViewComponent,
    MotorBurntOutReasonsMasterViewComponent,
    FailureInformationViewComponent,
    MotorMovementRegisterViewComponent,
    DepartmentMasterFormComponent,
    MakeMasterFormComponent,
    MotorTypeMasterFormComponent,
    MotorNamePlateDetailsFormComponent,
    MotorDetailsFormComponent,
    NoLoadTestResultsFormComponent,
    NoLoadMeasurementFormComponent,
    NoLoadPowerMeasurementFormComponent,
    FullLoadMeasuremntFormComponent,
    MotorFailureTagFormComponent,
    MotorBurntOutReasonsMasterFormComponent,
    FailureInformationFormComponent,
    MotorMovementRegisterFormComponent,
    MotorEfficienyDetailsComponent,
    MachineryMasterFormComponent,
    MotorBasedReportComponent,
    MotorNamePlateReportComponent,
    MotorDetailReportComponent,
    NoLoadMeasurementsReportsComponent,
    NoLoadTestResultsReportComponent,
    NoLoadPowerMeasurementReportComponent,
    FullLoadMeasurementsReportComponent,
    MotorFailureINformationReportComponent,
    MachineBasedReportComponent,
    MotorWiseFailureComponent,
    MotorWiseEfficiencyComponent,
    MotorMovementDetailsComponent,
    CriteriaBasedReportComponent,
    Tab1Component,
    Tab2Component,
    MotorMovementRegisterReportComponent,
    MotorFailureReportComponent,
    UserComponent,
    MenuList2Component,
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot(),
    FormsModule,
    CollapseModule.forRoot(),
    NgxPaginationModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), ModalModule.forRoot(), BsDropdownModule.forRoot(), TabsModule.forRoot()
  ],
  exports: [DepartmentMasterViewComponent],
  providers: [],
  entryComponents: [
    //Views
    DepartmentMasterViewComponent,
    MakeMasterViewComponent,
    MachineryMasterViewComponent,
    MotorTypeMasterViewComponent,
    MotorNamePlateDetailsViewComponent,
    MotorDetailsViewComponent,
    NoLoadTestResultsViewComponent,
    NoLoadMeasurementViewComponent,
    NoLoadPowerMeasurementViewComponent,
    FullLoadMeasuremntViewComponent,
    MotorFailureTagViewComponent,
    MotorBurntOutReasonsMasterViewComponent,
    FailureInformationViewComponent,
    MotorMovementRegisterViewComponent,
    //forms
    DepartmentMasterFormComponent,
    MakeMasterFormComponent,
    MotorTypeMasterFormComponent,
    MotorNamePlateDetailsFormComponent,
    MotorDetailsFormComponent,
    NoLoadTestResultsFormComponent,
    NoLoadMeasurementFormComponent,
    NoLoadPowerMeasurementFormComponent,
    FullLoadMeasuremntFormComponent,
    MotorFailureTagFormComponent,
    MotorBurntOutReasonsMasterFormComponent,
    FailureInformationFormComponent,
    MotorMovementRegisterFormComponent,
    MachineryMasterFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
