import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineEventtimeComponent } from './line-eventtime.component';

describe('LineEventtimeComponent', () => {
  let component: LineEventtimeComponent;
  let fixture: ComponentFixture<LineEventtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineEventtimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineEventtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
