import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoadMeasurementsReportsComponent } from './no-load-measurements-reports.component';

describe('NoLoadMeasurementsReportsComponent', () => {
  let component: NoLoadMeasurementsReportsComponent;
  let fixture: ComponentFixture<NoLoadMeasurementsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoadMeasurementsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoadMeasurementsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
