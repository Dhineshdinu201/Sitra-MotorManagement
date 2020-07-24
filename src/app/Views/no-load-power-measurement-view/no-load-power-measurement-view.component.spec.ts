import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoadPowerMeasurementViewComponent } from './no-load-power-measurement-view.component';

describe('NoLoadPowerMeasurementViewComponent', () => {
  let component: NoLoadPowerMeasurementViewComponent;
  let fixture: ComponentFixture<NoLoadPowerMeasurementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoadPowerMeasurementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoadPowerMeasurementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
