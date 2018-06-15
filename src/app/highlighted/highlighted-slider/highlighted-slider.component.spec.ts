import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedSliderComponent } from './highlighted-slider.component';

describe('HighlightedSliderComponent', () => {
  let component: HighlightedSliderComponent;
  let fixture: ComponentFixture<HighlightedSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightedSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
