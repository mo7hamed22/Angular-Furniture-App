import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcateogryComponent } from './navbarcateogry.component';

describe('NavbarcateogryComponent', () => {
  let component: NavbarcateogryComponent;
  let fixture: ComponentFixture<NavbarcateogryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcateogryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarcateogryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
