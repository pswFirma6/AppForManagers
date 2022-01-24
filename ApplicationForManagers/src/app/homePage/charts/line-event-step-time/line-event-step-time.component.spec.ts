import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineEventStepTimeComponent } from './line-event-step-time.component';

describe('LineEventStepTimeComponent', () => {
  let component: LineEventStepTimeComponent;
  let fixture: ComponentFixture<LineEventStepTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineEventStepTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineEventStepTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
