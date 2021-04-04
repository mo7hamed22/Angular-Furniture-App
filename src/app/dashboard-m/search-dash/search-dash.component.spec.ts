import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDashComponent } from './search-dash.component';

describe('SearchDashComponent', () => {
  let component: SearchDashComponent;
  let fixture: ComponentFixture<SearchDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
