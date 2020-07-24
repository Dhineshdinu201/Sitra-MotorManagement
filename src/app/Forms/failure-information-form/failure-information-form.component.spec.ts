import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureInformationFormComponent } from './failure-information-form.component';

describe('FailureInformationFormComponent', () => {
  let component: FailureInformationFormComponent;
  let fixture: ComponentFixture<FailureInformationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureInformationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
