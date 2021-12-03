import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyProfComponent } from './pharmacy-prof.component';

describe('PharmacyProfComponent', () => {
  let component: PharmacyProfComponent;
  let fixture: ComponentFixture<PharmacyProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
