import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorMovementRegisterComponent } from './motor-movement-register.component';

describe('MotorMovementRegisterComponent', () => {
  let component: MotorMovementRegisterComponent;
  let fixture: ComponentFixture<MotorMovementRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorMovementRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorMovementRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
