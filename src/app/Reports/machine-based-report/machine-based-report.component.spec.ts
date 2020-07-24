import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineBasedReportComponent } from './machine-based-report.component';

describe('MachineBasedReportComponent', () => {
  let component: MachineBasedReportComponent;
  let fixture: ComponentFixture<MachineBasedReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineBasedReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineBasedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
