import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductcComponent } from './edit-productc.component';

describe('EditProductcComponent', () => {
  let component: EditProductcComponent;
  let fixture: ComponentFixture<EditProductcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
