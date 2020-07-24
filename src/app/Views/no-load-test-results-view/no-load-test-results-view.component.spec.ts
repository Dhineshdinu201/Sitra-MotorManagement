import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoadTestResultsViewComponent } from './no-load-test-results-view.component';

describe('NoLoadTestResultsViewComponent', () => {
  let component: NoLoadTestResultsViewComponent;
  let fixture: ComponentFixture<NoLoadTestResultsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoadTestResultsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoadTestResultsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
