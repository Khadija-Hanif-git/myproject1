import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSalesOrder } from './open-sales-order';

describe('OpenSalesOrder', () => {
  let component: OpenSalesOrder;
  let fixture: ComponentFixture<OpenSalesOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenSalesOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenSalesOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
