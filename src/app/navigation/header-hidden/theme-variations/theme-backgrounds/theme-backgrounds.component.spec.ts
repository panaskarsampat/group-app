import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeBackgroundsComponent } from './theme-backgrounds.component';

describe('ThemeBackgroundsComponent', () => {
  let component: ThemeBackgroundsComponent;
  let fixture: ComponentFixture<ThemeBackgroundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeBackgroundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeBackgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
