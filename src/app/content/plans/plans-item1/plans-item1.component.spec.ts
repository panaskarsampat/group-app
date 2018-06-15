import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansItem1Component } from './plans-item1.component';

describe('PlansItem1Component', () => {
  let component: PlansItem1Component;
  let fixture: ComponentFixture<PlansItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
