import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item10Component } from './item10.component';

describe('Item10Component', () => {
  let component: Item10Component;
  let fixture: ComponentFixture<Item10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
