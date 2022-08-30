import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationofchangeofownershipComponent } from './notificationofchangeofownership.component';

describe('NotificationofchangeofownershipComponent', () => {
  let component: NotificationofchangeofownershipComponent;
  let fixture: ComponentFixture<NotificationofchangeofownershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationofchangeofownershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationofchangeofownershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
