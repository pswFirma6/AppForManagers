import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineEventStepsComponent } from './line-event-steps.component';

describe('LineEventStepsComponent', () => {
  let component: LineEventStepsComponent;
  let fixture: ComponentFixture<LineEventStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineEventStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineEventStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
