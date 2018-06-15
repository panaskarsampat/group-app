import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionTextComponent } from './mission-text.component';

describe('MissionTextComponent', () => {
  let component: MissionTextComponent;
  let fixture: ComponentFixture<MissionTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
