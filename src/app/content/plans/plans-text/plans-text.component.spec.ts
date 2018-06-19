import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansTextComponent } from './plans-text.component';

describe('PlansTextComponent', () => {
  let component: PlansTextComponent;
  let fixture: ComponentFixture<PlansTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
