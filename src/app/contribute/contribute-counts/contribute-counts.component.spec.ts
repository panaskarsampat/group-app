import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeCountsComponent } from './contribute-counts.component';

describe('ContributeCountsComponent', () => {
  let component: ContributeCountsComponent;
  let fixture: ComponentFixture<ContributeCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributeCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
