import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorTypeMasterListComponent } from './motor-type-master-list.component';

describe('MotorTypeMasterListComponent', () => {
  let component: MotorTypeMasterListComponent;
  let fixture: ComponentFixture<MotorTypeMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorTypeMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorTypeMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
