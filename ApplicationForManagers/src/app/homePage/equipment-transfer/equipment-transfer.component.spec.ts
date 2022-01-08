import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTransferComponent } from './equipment-transfer.component';

describe('EquipmentTransferComponent', () => {
  let component: EquipmentTransferComponent;
  let fixture: ComponentFixture<EquipmentTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
