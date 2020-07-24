import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeMasterViewComponent } from './make-master-view.component';

describe('MakeMasterViewComponent', () => {
  let component: MakeMasterViewComponent;
  let fixture: ComponentFixture<MakeMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
