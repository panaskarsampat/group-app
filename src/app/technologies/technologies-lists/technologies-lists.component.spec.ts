import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesListsComponent } from './technologies-lists.component';

describe('TechnologiesListsComponent', () => {
  let component: TechnologiesListsComponent;
  let fixture: ComponentFixture<TechnologiesListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
