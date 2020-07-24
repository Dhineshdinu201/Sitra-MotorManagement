import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorFailureReportComponent } from './motor-failure-report.component';

describe('MotorFailureReportComponent', () => {
  let component: MotorFailureReportComponent;
  let fixture: ComponentFixture<MotorFailureReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorFailureReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorFailureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
