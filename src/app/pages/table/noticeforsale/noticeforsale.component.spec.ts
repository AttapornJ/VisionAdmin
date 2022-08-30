import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeforsaleComponent } from './noticeforsale.component';

describe('NoticeforsaleComponent', () => {
  let component: NoticeforsaleComponent;
  let fixture: ComponentFixture<NoticeforsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeforsaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeforsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
