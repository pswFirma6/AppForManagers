import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarEventStepsDateComponent } from './bar-event-steps-date.component';

describe('BarEventStepsDateComponent', () => {
  let component: BarEventStepsDateComponent;
  let fixture: ComponentFixture<BarEventStepsDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarEventStepsDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarEventStepsDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
