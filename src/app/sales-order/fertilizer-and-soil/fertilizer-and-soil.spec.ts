import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerAndSoil } from './fertilizer-and-soil';

describe('FertilizerAndSoil', () => {
  let component: FertilizerAndSoil;
  let fixture: ComponentFixture<FertilizerAndSoil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FertilizerAndSoil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FertilizerAndSoil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
