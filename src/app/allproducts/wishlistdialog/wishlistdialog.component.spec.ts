import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistdialogComponent } from './wishlistdialog.component';

describe('WishlistdialogComponent', () => {
  let component: WishlistdialogComponent;
  let fixture: ComponentFixture<WishlistdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
