import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorMovementRegisterReportComponent } from './motor-movement-register-report.component';

describe('MotorMovementRegisterReportComponent', () => {
  let component: MotorMovementRegisterReportComponent;
  let fixture: ComponentFixture<MotorMovementRegisterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorMovementRegisterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorMovementRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
