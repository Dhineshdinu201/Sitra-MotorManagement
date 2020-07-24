import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryMasterFormComponent } from './machinery-master-form.component';

describe('MachineryMasterFormComponent', () => {
  let component: MachineryMasterFormComponent;
  let fixture: ComponentFixture<MachineryMasterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryMasterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
