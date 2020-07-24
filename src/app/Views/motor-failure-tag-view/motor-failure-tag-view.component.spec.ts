import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorFailureTagViewComponent } from './motor-failure-tag-view.component';

describe('MotorFailureTagViewComponent', () => {
  let component: MotorFailureTagViewComponent;
  let fixture: ComponentFixture<MotorFailureTagViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorFailureTagViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorFailureTagViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
