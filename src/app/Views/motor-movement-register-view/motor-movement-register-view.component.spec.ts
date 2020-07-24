import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorMovementRegisterViewComponent } from './motor-movement-register-view.component';

describe('MotorMovementRegisterViewComponent', () => {
  let component: MotorMovementRegisterViewComponent;
  let fixture: ComponentFixture<MotorMovementRegisterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorMovementRegisterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorMovementRegisterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
