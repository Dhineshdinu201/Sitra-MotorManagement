import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoadPowerMeasurementFormComponent } from './no-load-power-measurement-form.component';

describe('NoLoadPowerMeasurementFormComponent', () => {
  let component: NoLoadPowerMeasurementFormComponent;
  let fixture: ComponentFixture<NoLoadPowerMeasurementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoadPowerMeasurementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoadPowerMeasurementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
