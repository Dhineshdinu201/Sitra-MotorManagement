import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoadTestResultsReportComponent } from './no-load-test-results-report.component';

describe('NoLoadTestResultsReportComponent', () => {
  let component: NoLoadTestResultsReportComponent;
  let fixture: ComponentFixture<NoLoadTestResultsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoadTestResultsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoadTestResultsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
