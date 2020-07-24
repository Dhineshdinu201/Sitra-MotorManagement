import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoadMeasurementFormComponent } from './no-load-measurement-form.component';

describe('NoLoadMeasurementFormComponent', () => {
  let component: NoLoadMeasurementFormComponent;
  let fixture: ComponentFixture<NoLoadMeasurementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoadMeasurementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoadMeasurementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
