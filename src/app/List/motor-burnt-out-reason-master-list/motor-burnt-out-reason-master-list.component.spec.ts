import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorBurntOutReasonMasterListComponent } from './motor-burnt-out-reason-master-list.component';

describe('MotorBurntOutReasonMasterListComponent', () => {
  let component: MotorBurntOutReasonMasterListComponent;
  let fixture: ComponentFixture<MotorBurntOutReasonMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorBurntOutReasonMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorBurntOutReasonMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
