import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLinkmenusComponent } from './header-linkmenus.component';

describe('HeaderLinkmenusComponent', () => {
  let component: HeaderLinkmenusComponent;
  let fixture: ComponentFixture<HeaderLinkmenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLinkmenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLinkmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
