import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRPopComponentComponent } from './qrpop-component.component';

describe('QRPopComponentComponent', () => {
  let component: QRPopComponentComponent;
  let fixture: ComponentFixture<QRPopComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRPopComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRPopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
