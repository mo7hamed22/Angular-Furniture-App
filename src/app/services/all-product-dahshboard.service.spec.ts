import { TestBed } from '@angular/core/testing';

import { AllProductDahshboardService } from './all-product-dahshboard.service';

describe('AllProductDahshboardService', () => {
  let service: AllProductDahshboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProductDahshboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
