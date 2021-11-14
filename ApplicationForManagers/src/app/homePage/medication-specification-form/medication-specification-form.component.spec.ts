import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationSpecificationFormComponent } from './medication-specification-form.component';

describe('MedicationSpecificationFormComponent', () => {
  let component: MedicationSpecificationFormComponent;
  let fixture: ComponentFixture<MedicationSpecificationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationSpecificationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationSpecificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
