import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedComponent } from './highlighted.component';

describe('HighlightedComponent', () => {
  let component: HighlightedComponent;
  let fixture: ComponentFixture<HighlightedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
