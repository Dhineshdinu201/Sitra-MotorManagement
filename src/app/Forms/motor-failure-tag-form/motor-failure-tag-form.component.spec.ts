import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorFailureTagFormComponent } from './motor-failure-tag-form.component';

describe('MotorFailureTagFormComponent', () => {
  let component: MotorFailureTagFormComponent;
  let fixture: ComponentFixture<MotorFailureTagFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorFailureTagFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorFailureTagFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
