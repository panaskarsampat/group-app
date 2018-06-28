import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesCountComponent } from './resources-count.component';

describe('ResourcesCountComponent', () => {
  let component: ResourcesCountComponent;
  let fixture: ComponentFixture<ResourcesCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
