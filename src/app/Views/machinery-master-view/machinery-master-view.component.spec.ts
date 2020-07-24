import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryMasterViewComponent } from './machinery-master-view.component';

describe('MachineryMasterViewComponent', () => {
  let component: MachineryMasterViewComponent;
  let fixture: ComponentFixture<MachineryMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
