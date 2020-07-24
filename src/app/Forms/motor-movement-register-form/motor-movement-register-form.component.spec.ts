import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorMovementRegisterFormComponent } from './motor-movement-register-form.component';

describe('MotorMovementRegisterFormComponent', () => {
  let component: MotorMovementRegisterFormComponent;
  let fixture: ComponentFixture<MotorMovementRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorMovementRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorMovementRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
