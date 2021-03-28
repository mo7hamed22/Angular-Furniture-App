import { TestBed } from '@angular/core/testing';

import { ProductIncartService } from './product-incart.service';

describe('ProductIncartService', () => {
  let service: ProductIncartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductIncartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
