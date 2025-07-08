import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalesReturn } from './create-sales-return';

describe('CreateSalesReturn', () => {
  let component: CreateSalesReturn;
  let fixture: ComponentFixture<CreateSalesReturn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSalesReturn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSalesReturn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
