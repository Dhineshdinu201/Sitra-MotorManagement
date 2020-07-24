import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorBasedReportComponent } from './motor-based-report.component';

describe('MotorBasedReportComponent', () => {
  let component: MotorBasedReportComponent;
  let fixture: ComponentFixture<MotorBasedReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorBasedReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorBasedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
