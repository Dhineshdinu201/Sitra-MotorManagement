import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoadMeasurementViewComponent } from './no-load-measurement-view.component';

describe('NoLoadMeasurementViewComponent', () => {
  let component: NoLoadMeasurementViewComponent;
  let fixture: ComponentFixture<NoLoadMeasurementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoadMeasurementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoadMeasurementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
