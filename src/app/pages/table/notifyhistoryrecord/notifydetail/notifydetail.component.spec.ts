import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifydetailComponent } from './notifydetail.component';

describe('NotifydetailComponent', () => {
  let component: NotifydetailComponent;
  let fixture: ComponentFixture<NotifydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifydetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
