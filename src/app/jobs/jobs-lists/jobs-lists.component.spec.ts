import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsListsComponent } from './jobs-lists.component';

describe('JobsListsComponent', () => {
  let component: JobsListsComponent;
  let fixture: ComponentFixture<JobsListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
