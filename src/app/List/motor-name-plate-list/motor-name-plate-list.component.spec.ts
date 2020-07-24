import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorNamePlateListComponent } from './motor-name-plate-list.component';

describe('MotorNamePlateListComponent', () => {
  let component: MotorNamePlateListComponent;
  let fixture: ComponentFixture<MotorNamePlateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorNamePlateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorNamePlateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
