import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorDetailReportComponent } from './motor-detail-report.component';

describe('MotorDetailReportComponent', () => {
  let component: MotorDetailReportComponent;
  let fixture: ComponentFixture<MotorDetailReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorDetailReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
