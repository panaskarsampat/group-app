import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Active.UserComponent } from './active.user.component';

describe('Active.UserComponent', () => {
  let component: Active.UserComponent;
  let fixture: ComponentFixture<Active.UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Active.UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Active.UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
