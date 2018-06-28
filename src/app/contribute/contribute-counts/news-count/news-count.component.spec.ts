import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCountComponent } from './news-count.component';

describe('NewsCountComponent', () => {
  let component: NewsCountComponent;
  let fixture: ComponentFixture<NewsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
