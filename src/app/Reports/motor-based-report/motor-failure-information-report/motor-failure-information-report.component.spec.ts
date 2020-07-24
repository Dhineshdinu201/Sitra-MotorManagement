import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorFailureINformationReportComponent } from './motor-failure-information-report.component';

describe('MotorFailureINformationReportComponent', () => {
  let component: MotorFailureINformationReportComponent;
  let fixture: ComponentFixture<MotorFailureINformationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorFailureINformationReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorFailureINformationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
