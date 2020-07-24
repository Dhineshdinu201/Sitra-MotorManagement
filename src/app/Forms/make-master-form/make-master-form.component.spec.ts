import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeMasterFormComponent } from './make-master-form.component';

describe('MakeMasterFormComponent', () => {
  let component: MakeMasterFormComponent;
  let fixture: ComponentFixture<MakeMasterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeMasterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
