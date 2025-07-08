import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerPlant } from './flower-plant';

describe('FlowerPlant', () => {
  let component: FlowerPlant;
  let fixture: ComponentFixture<FlowerPlant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerPlant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerPlant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
