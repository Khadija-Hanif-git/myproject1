import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDelivery } from './open-delivery';

describe('OpenDelivery', () => {
  let component: OpenDelivery;
  let fixture: ComponentFixture<OpenDelivery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenDelivery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenDelivery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
