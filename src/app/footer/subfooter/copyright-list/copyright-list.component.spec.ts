import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightListComponent } from './copyright-list.component';

describe('CopyrightListComponent', () => {
  let component: CopyrightListComponent;
  let fixture: ComponentFixture<CopyrightListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyrightListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
