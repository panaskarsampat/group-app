import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansItem4Component } from './plans-item4.component';

describe('PlansItem4Component', () => {
  let component: PlansItem4Component;
  let fixture: ComponentFixture<PlansItem4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansItem4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansItem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
