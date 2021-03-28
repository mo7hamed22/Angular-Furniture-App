import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithOfferComponent } from './products-with-offer.component';

describe('ProductsWithOfferComponent', () => {
  let component: ProductsWithOfferComponent;
  let fixture: ComponentFixture<ProductsWithOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWithOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
