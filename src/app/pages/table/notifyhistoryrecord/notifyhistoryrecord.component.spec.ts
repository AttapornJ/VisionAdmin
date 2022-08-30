import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyhistoryrecordComponent } from './notifyhistoryrecord.component';

describe('NotifyhistoryrecordComponent', () => {
  let component: NotifyhistoryrecordComponent;
  let fixture: ComponentFixture<NotifyhistoryrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyhistoryrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyhistoryrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
