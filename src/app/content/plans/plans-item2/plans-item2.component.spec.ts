import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansItem2Component } from './plans-item2.component';

describe('PlansItem2Component', () => {
  let component: PlansItem2Component;
  let fixture: ComponentFixture<PlansItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
