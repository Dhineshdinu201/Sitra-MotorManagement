import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorNamePlateReportComponent } from './motor-name-plate-report.component';

describe('MotorNamePlateReportComponent', () => {
  let component: MotorNamePlateReportComponent;
  let fixture: ComponentFixture<MotorNamePlateReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorNamePlateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorNamePlateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
