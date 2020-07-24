import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentMasterFormComponent } from './department-master-form.component';

describe('DepartmentMasterFormComponent', () => {
  let component: DepartmentMasterFormComponent;
  let fixture: ComponentFixture<DepartmentMasterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentMasterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
