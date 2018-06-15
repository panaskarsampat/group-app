import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTextComponent } from './navbar-text.component';

describe('NavbarTextComponent', () => {
  let component: NavbarTextComponent;
  let fixture: ComponentFixture<NavbarTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
