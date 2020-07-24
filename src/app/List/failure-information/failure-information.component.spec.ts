import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureInformationComponent } from './failure-information.component';

describe('FailureInformationComponent', () => {
  let component: FailureInformationComponent;
  let fixture: ComponentFixture<FailureInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
