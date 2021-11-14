import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFeedbacksComponent } from './patient-feedbacks.component';

describe('PatientFeedbacksComponent', () => {
  let component: PatientFeedbacksComponent;
  let fixture: ComponentFixture<PatientFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFeedbacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
