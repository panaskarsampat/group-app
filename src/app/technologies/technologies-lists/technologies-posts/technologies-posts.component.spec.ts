import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesPostsComponent } from './technologies-posts.component';

describe('TechnologiesPostsComponent', () => {
  let component: TechnologiesPostsComponent;
  let fixture: ComponentFixture<TechnologiesPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
