import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesItem3Component } from './services-item3.component';

describe('ServicesItem3Component', () => {
  let component: ServicesItem3Component;
  let fixture: ComponentFixture<ServicesItem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesItem3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
