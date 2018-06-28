import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsCountComponent } from './blogs-count.component';

describe('BlogsCountComponent', () => {
  let component: BlogsCountComponent;
  let fixture: ComponentFixture<BlogsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
