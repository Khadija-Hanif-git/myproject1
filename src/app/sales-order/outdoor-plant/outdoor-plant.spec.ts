import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorPlant } from './outdoor-plant';

describe('OutdoorPlant', () => {
  let component: OutdoorPlant;
  let fixture: ComponentFixture<OutdoorPlant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutdoorPlant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorPlant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
