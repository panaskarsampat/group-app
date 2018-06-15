import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item12Component } from './item12.component';

describe('Item12Component', () => {
  let component: Item12Component;
  let fixture: ComponentFixture<Item12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
