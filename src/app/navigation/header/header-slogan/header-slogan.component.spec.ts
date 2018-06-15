import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSloganComponent } from './header-slogan.component';

describe('HeaderSloganComponent', () => {
  let component: HeaderSloganComponent;
  let fixture: ComponentFixture<HeaderSloganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSloganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
