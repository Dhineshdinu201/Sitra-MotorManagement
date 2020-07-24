import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryMasterListComponent } from './machinery-master-list.component';

describe('MachineryMasterListComponent', () => {
  let component: MachineryMasterListComponent;
  let fixture: ComponentFixture<MachineryMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
