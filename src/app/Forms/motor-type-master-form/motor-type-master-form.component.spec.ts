import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorTypeMasterFormComponent } from './motor-type-master-form.component';

describe('MotorTypeMasterFormComponent', () => {
  let component: MotorTypeMasterFormComponent;
  let fixture: ComponentFixture<MotorTypeMasterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorTypeMasterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorTypeMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
