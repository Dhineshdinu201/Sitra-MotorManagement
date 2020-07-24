import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorDetailsFormComponent } from './motor-details-form.component';

describe('MotorDetailsFormComponent', () => {
  let component: MotorDetailsFormComponent;
  let fixture: ComponentFixture<MotorDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
