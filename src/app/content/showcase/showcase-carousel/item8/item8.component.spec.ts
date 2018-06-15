import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item8Component } from './item8.component';

describe('Item8Component', () => {
  let component: Item8Component;
  let fixture: ComponentFixture<Item8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
