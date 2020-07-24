import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoadPowerMeasurementsComponent } from './no-load-power-measurements.component';

describe('NoLoadPowerMeasurementsComponent', () => {
  let component: NoLoadPowerMeasurementsComponent;
  let fixture: ComponentFixture<NoLoadPowerMeasurementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoadPowerMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoadPowerMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
