import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorMovementDetailsComponent } from './motor-movement-details.component';

describe('MotorMovementDetailsComponent', () => {
  let component: MotorMovementDetailsComponent;
  let fixture: ComponentFixture<MotorMovementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorMovementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorMovementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
