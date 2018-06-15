import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesItem1Component } from './services-item1.component';

describe('ServicesItem1Component', () => {
  let component: ServicesItem1Component;
  let fixture: ComponentFixture<ServicesItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
