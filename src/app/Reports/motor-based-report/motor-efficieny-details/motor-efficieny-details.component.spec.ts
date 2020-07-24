import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorEfficienyDetailsComponent } from './motor-efficieny-details.component';

describe('MotorEfficienyDetailsComponent', () => {
  let component: MotorEfficienyDetailsComponent;
  let fixture: ComponentFixture<MotorEfficienyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorEfficienyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorEfficienyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
