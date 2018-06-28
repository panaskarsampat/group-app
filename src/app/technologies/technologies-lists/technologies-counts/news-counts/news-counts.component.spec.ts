import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCountsComponent } from './news-counts.component';

describe('NewsCountsComponent', () => {
  let component: NewsCountsComponent;
  let fixture: ComponentFixture<NewsCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
