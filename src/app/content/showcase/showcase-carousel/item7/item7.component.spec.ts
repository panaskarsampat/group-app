import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item7Component } from './item7.component';

describe('Item7Component', () => {
  let component: Item7Component;
  let fixture: ComponentFixture<Item7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
