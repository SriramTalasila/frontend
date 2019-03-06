import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcomplaintsComponent } from './adcomplaints.component';

describe('AdcomplaintsComponent', () => {
  let component: AdcomplaintsComponent;
  let fixture: ComponentFixture<AdcomplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcomplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
