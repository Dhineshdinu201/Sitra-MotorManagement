import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorNamePlateDetailsFormComponent } from './motor-name-plate-details-form.component';

describe('MotorNamePlateDetailsFormComponent', () => {
  let component: MotorNamePlateDetailsFormComponent;
  let fixture: ComponentFixture<MotorNamePlateDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorNamePlateDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorNamePlateDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
