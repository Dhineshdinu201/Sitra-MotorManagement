import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuList2Component } from './menu-list2.component';

describe('MenuList2Component', () => {
  let component: MenuList2Component;
  let fixture: ComponentFixture<MenuList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
