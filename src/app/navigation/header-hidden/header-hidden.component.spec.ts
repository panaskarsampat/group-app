import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHiddenComponent } from './header-hidden.component';

describe('HeaderHiddenComponent', () => {
  let component: HeaderHiddenComponent;
  let fixture: ComponentFixture<HeaderHiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderHiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
