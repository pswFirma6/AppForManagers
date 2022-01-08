import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationConsumptionReportComponent } from './medication-consumption-report.component';

describe('MedicationConsumptionReportComponent', () => {
  let component: MedicationConsumptionReportComponent;
  let fixture: ComponentFixture<MedicationConsumptionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationConsumptionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationConsumptionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
