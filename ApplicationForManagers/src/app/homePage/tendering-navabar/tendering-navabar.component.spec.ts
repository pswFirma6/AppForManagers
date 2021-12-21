import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderingNavabarComponent } from './tendering-navabar.component';

describe('TenderingNavabarComponent', () => {
  let component: TenderingNavabarComponent;
  let fixture: ComponentFixture<TenderingNavabarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderingNavabarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderingNavabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
