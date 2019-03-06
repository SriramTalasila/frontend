import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwardenComponent } from './adminwarden.component';

describe('AdminwardenComponent', () => {
  let component: AdminwardenComponent;
  let fixture: ComponentFixture<AdminwardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminwardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminwardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
