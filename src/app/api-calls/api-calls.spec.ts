import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APICALLS } from './api-calls';

describe('APICALLS', () => {
  let component: APICALLS;
  let fixture: ComponentFixture<APICALLS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APICALLS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APICALLS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
