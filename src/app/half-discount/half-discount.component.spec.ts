import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfDiscountComponent } from './half-discount.component';

describe('HalfDiscountComponent', () => {
  let component: HalfDiscountComponent;
  let fixture: ComponentFixture<HalfDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
