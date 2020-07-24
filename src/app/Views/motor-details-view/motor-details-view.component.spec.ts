import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorDetailsViewComponent } from './motor-details-view.component';

describe('MotorDetailsViewComponent', () => {
  let component: MotorDetailsViewComponent;
  let fixture: ComponentFixture<MotorDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
