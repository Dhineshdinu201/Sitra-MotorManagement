import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoadTestResultsListComponent } from './no-load-test-results-list.component';

describe('NoLoadTestResultsListComponent', () => {
  let component: NoLoadTestResultsListComponent;
  let fixture: ComponentFixture<NoLoadTestResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoadTestResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoadTestResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
