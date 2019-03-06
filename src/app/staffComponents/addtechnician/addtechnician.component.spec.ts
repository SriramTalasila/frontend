import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtechnicianComponent } from './addtechnician.component';

describe('AddtechnicianComponent', () => {
  let component: AddtechnicianComponent;
  let fixture: ComponentFixture<AddtechnicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtechnicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
