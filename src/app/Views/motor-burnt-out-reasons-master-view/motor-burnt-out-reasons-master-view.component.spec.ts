import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorBurntOutReasonsMasterViewComponent } from './motor-burnt-out-reasons-master-view.component';

describe('MotorBurntOutReasonsMasterViewComponent', () => {
  let component: MotorBurntOutReasonsMasterViewComponent;
  let fixture: ComponentFixture<MotorBurntOutReasonsMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorBurntOutReasonsMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorBurntOutReasonsMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
