import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLoadMeasurementsComponent } from './full-load-measurements.component';

describe('FullLoadMeasurementsComponent', () => {
  let component: FullLoadMeasurementsComponent;
  let fixture: ComponentFixture<FullLoadMeasurementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLoadMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLoadMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
