import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeHeaderComponent } from './contribute-header.component';

describe('ContributeHeaderComponent', () => {
  let component: ContributeHeaderComponent;
  let fixture: ComponentFixture<ContributeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
