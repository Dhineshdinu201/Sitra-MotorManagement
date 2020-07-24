import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorBurntOutReasonsMasterFormComponent } from './motor-burnt-out-reasons-master-form.component';

describe('MotorBurntOutReasonsMasterFormComponent', () => {
  let component: MotorBurntOutReasonsMasterFormComponent;
  let fixture: ComponentFixture<MotorBurntOutReasonsMasterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorBurntOutReasonsMasterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorBurntOutReasonsMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
