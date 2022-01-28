import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PieEventDoctorComponent } from './pie-event-doctor.component'



describe('PieEventDoctorComponent', () => {
  let component: PieEventDoctorComponent;
  let fixture: ComponentFixture<PieEventDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieEventDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieEventDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
