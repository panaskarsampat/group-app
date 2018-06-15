import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseCarouselComponent } from './showcase-carousel.component';

describe('ShowcaseCarouselComponent', () => {
  let component: ShowcaseCarouselComponent;
  let fixture: ComponentFixture<ShowcaseCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
