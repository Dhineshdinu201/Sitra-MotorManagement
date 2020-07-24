import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureInformationViewComponent } from './failure-information-view.component';

describe('FailureInformationViewComponent', () => {
  let component: FailureInformationViewComponent;
  let fixture: ComponentFixture<FailureInformationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureInformationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureInformationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
