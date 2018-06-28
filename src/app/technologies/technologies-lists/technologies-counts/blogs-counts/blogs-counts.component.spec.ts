import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsCountsComponent } from './blogs-counts.component';

describe('BlogsCountsComponent', () => {
  let component: BlogsCountsComponent;
  let fixture: ComponentFixture<BlogsCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
