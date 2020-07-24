import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorNamePlateDetailsViewComponent } from './motor-name-plate-details-view.component';

describe('MotorNamePlateDetailsViewComponent', () => {
  let component: MotorNamePlateDetailsViewComponent;
  let fixture: ComponentFixture<MotorNamePlateDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorNamePlateDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorNamePlateDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
