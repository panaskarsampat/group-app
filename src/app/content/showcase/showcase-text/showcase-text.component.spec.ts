import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseTextComponent } from './showcase-text.component';

describe('ShowcaseTextComponent', () => {
  let component: ShowcaseTextComponent;
  let fixture: ComponentFixture<ShowcaseTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
