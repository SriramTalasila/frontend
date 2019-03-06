import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmycomplaintsComponent } from './viewmycomplaints.component';

describe('ViewmycomplaintsComponent', () => {
  let component: ViewmycomplaintsComponent;
  let fixture: ComponentFixture<ViewmycomplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmycomplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmycomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
