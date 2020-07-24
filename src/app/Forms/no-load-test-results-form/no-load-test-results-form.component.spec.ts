import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoadTestResultsFormComponent } from './no-load-test-results-form.component';

describe('NoLoadTestResultsFormComponent', () => {
  let component: NoLoadTestResultsFormComponent;
  let fixture: ComponentFixture<NoLoadTestResultsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoadTestResultsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoadTestResultsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
