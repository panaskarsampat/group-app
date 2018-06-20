import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsLoginComponent } from './ads-login.component';

describe('AdsLoginComponent', () => {
  let component: AdsLoginComponent;
  let fixture: ComponentFixture<AdsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
