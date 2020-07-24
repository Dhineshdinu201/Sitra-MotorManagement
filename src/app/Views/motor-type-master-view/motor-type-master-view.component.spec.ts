import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorTypeMasterViewComponent } from './motor-type-master-view.component';

describe('MotorTypeMasterViewComponent', () => {
  let component: MotorTypeMasterViewComponent;
  let fixture: ComponentFixture<MotorTypeMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorTypeMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorTypeMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
