import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeVariationsComponent } from './theme-variations.component';

describe('ThemeVariationsComponent', () => {
  let component: ThemeVariationsComponent;
  let fixture: ComponentFixture<ThemeVariationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeVariationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
