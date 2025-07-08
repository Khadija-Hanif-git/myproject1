import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPriceList } from './sales-price-list';

describe('SalesPriceList', () => {
  let component: SalesPriceList;
  let fixture: ComponentFixture<SalesPriceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesPriceList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPriceList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
