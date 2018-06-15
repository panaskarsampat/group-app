import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item11Component } from './item11.component';

describe('Item11Component', () => {
  let component: Item11Component;
  let fixture: ComponentFixture<Item11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
