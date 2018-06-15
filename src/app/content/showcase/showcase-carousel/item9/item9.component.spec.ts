import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item9Component } from './item9.component';

describe('Item9Component', () => {
  let component: Item9Component;
  let fixture: ComponentFixture<Item9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
