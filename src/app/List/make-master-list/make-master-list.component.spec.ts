import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeMasterListComponent } from './make-master-list.component';

describe('MakeMasterListComponent', () => {
  let component: MakeMasterListComponent;
  let fixture: ComponentFixture<MakeMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
