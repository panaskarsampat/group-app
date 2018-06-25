import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalesComponent } from './articales.component';

describe('ArticalesComponent', () => {
  let component: ArticalesComponent;
  let fixture: ComponentFixture<ArticalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
