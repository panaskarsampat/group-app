import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesItem2Component } from './services-item2.component';

describe('ServicesItem2Component', () => {
  let component: ServicesItem2Component;
  let fixture: ComponentFixture<ServicesItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
