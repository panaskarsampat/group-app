import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsIndustrialtrainingComponent } from './ads-industrialtraining.component';

describe('AdsIndustrialtrainingComponent', () => {
  let component: AdsIndustrialtrainingComponent;
  let fixture: ComponentFixture<AdsIndustrialtrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsIndustrialtrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsIndustrialtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
