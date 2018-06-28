import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalesCountComponent } from './articales-count.component';

describe('ArticalesCountComponent', () => {
  let component: ArticalesCountComponent;
  let fixture: ComponentFixture<ArticalesCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticalesCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticalesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
