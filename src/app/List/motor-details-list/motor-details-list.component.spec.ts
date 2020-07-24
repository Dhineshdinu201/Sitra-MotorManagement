import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorDetailsListComponent } from './motor-details-list.component';

describe('MotorDetailsListComponent', () => {
  let component: MotorDetailsListComponent;
  let fixture: ComponentFixture<MotorDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
