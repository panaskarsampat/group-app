import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalesCountsComponent } from './articales-counts.component';

describe('ArticalesCountsComponent', () => {
  let component: ArticalesCountsComponent;
  let fixture: ComponentFixture<ArticalesCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticalesCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticalesCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
