import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentMasterViewComponent } from './department-master-view.component';

describe('DepartmentMasterViewComponent', () => {
  let component: DepartmentMasterViewComponent;
  let fixture: ComponentFixture<DepartmentMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
