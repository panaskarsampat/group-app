import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesCountsComponent } from './technologies-counts.component';

describe('TechnologiesCountsComponent', () => {
  let component: TechnologiesCountsComponent;
  let fixture: ComponentFixture<TechnologiesCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
