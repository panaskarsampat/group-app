import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsRegisterComponent } from './ads-register.component';

describe('AdsRegisterComponent', () => {
  let component: AdsRegisterComponent;
  let fixture: ComponentFixture<AdsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
