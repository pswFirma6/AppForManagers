import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyOffersComponent } from './pharmacy-offers.component';

describe('PharmacyOffersComponent', () => {
  let component: PharmacyOffersComponent;
  let fixture: ComponentFixture<PharmacyOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
