import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorFailureTagComponent } from './motor-failure-tag.component';

describe('MotorFailureTagComponent', () => {
  let component: MotorFailureTagComponent;
  let fixture: ComponentFixture<MotorFailureTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorFailureTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorFailureTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
