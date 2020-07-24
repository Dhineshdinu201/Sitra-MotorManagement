import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaBasedReportComponent } from './criteria-based-report.component';

describe('CriteriaBasedReportComponent', () => {
  let component: CriteriaBasedReportComponent;
  let fixture: ComponentFixture<CriteriaBasedReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaBasedReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaBasedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
