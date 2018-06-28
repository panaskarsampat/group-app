import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDetailsCountsComponent } from './posts-details-counts.component';

describe('PostsDetailsCountsComponent', () => {
  let component: PostsDetailsCountsComponent;
  let fixture: ComponentFixture<PostsDetailsCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsDetailsCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsDetailsCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
