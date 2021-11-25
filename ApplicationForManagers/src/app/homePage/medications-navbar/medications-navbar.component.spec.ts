import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationsNavbarComponent } from './medications-navbar.component';

describe('MedicationsNavbarComponent', () => {
  let component: MedicationsNavbarComponent;
  let fixture: ComponentFixture<MedicationsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationsNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
