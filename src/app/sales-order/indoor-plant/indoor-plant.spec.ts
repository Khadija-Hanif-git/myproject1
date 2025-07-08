import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorPlant } from './indoor-plant';

describe('IndoorPlant', () => {
  let component: IndoorPlant;
  let fixture: ComponentFixture<IndoorPlant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndoorPlant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndoorPlant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
