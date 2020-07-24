import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorWiseEfficiencyComponent } from './motor-wise-efficiency.component';

describe('MotorWiseEfficiencyComponent', () => {
  let component: MotorWiseEfficiencyComponent;
  let fixture: ComponentFixture<MotorWiseEfficiencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorWiseEfficiencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorWiseEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
