import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoadPowerMeasurementReportComponent } from './no-load-power-measurement-report.component';

describe('NoLoadPowerMeasurementReportComponent', () => {
  let component: NoLoadPowerMeasurementReportComponent;
  let fixture: ComponentFixture<NoLoadPowerMeasurementReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoadPowerMeasurementReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoadPowerMeasurementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
