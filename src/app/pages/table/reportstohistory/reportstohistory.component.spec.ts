import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportstohistoryComponent } from './reportstohistory.component';

describe('ReportstohistoryComponent', () => {
  let component: ReportstohistoryComponent;
  let fixture: ComponentFixture<ReportstohistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportstohistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportstohistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
