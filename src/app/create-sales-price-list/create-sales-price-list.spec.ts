import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalesPriceList } from './create-sales-price-list';

describe('CreateSalesPriceList', () => {
  let component: CreateSalesPriceList;
  let fixture: ComponentFixture<CreateSalesPriceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSalesPriceList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSalesPriceList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
