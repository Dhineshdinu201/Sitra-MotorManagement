import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLoadMeasurementsReportComponent } from './full-load-measurements-report.component';

describe('FullLoadMeasurementsReportComponent', () => {
  let component: FullLoadMeasurementsReportComponent;
  let fixture: ComponentFixture<FullLoadMeasurementsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLoadMeasurementsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLoadMeasurementsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
