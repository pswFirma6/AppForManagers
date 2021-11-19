import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationAvailabilityComponent } from './medication-availability.component';

describe('MedicationAvailabilityComponent', () => {
  let component: MedicationAvailabilityComponent;
  let fixture: ComponentFixture<MedicationAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
