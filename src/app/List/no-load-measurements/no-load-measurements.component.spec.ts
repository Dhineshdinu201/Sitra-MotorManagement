import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoadMeasurementsComponent } from './no-load-measurements.component';

describe('NoLoadMeasurementsComponent', () => {
  let component: NoLoadMeasurementsComponent;
  let fixture: ComponentFixture<NoLoadMeasurementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoadMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoadMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
