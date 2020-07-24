import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLoadMeasuremntViewComponent } from './full-load-measuremnt-view.component';

describe('FullLoadMeasuremntViewComponent', () => {
  let component: FullLoadMeasuremntViewComponent;
  let fixture: ComponentFixture<FullLoadMeasuremntViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLoadMeasuremntViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLoadMeasuremntViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
