import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestInvolvementComponent } from './latest-involvement.component';

describe('LatestInvolvementComponent', () => {
  let component: LatestInvolvementComponent;
  let fixture: ComponentFixture<LatestInvolvementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestInvolvementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestInvolvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
