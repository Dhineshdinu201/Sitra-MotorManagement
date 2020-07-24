import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLoadMeasuremntFormComponent } from './full-load-measuremnt-form.component';

describe('FullLoadMeasuremntFormComponent', () => {
  let component: FullLoadMeasuremntFormComponent;
  let fixture: ComponentFixture<FullLoadMeasuremntFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLoadMeasuremntFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLoadMeasuremntFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
