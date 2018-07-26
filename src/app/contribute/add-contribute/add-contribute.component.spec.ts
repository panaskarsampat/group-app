import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContributeComponent } from './add-contribute.component';

describe('AddContributeComponent', () => {
  let component: AddContributeComponent;
  let fixture: ComponentFixture<AddContributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
