import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsAboutusComponent } from './ads-aboutus.component';

describe('AdsAboutusComponent', () => {
  let component: AdsAboutusComponent;
  let fixture: ComponentFixture<AdsAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
