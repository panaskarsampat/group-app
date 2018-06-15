import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansItem3Component } from './plans-item3.component';

describe('PlansItem3Component', () => {
  let component: PlansItem3Component;
  let fixture: ComponentFixture<PlansItem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansItem3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
