import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesCountsComponent } from './resources-counts.component';

describe('ResourcesCountsComponent', () => {
  let component: ResourcesCountsComponent;
  let fixture: ComponentFixture<ResourcesCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
