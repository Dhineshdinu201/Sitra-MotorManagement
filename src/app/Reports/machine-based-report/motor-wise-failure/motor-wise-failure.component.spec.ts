import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorWiseFailureComponent } from './motor-wise-failure.component';

describe('MotorWiseFailureComponent', () => {
  let component: MotorWiseFailureComponent;
  let fixture: ComponentFixture<MotorWiseFailureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorWiseFailureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorWiseFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
