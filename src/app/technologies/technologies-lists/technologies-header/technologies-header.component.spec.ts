import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesHeaderComponent } from './technologies-header.component';

describe('TechnologiesHeaderComponent', () => {
  let component: TechnologiesHeaderComponent;
  let fixture: ComponentFixture<TechnologiesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
