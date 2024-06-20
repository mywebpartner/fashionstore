import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByCategoryComponent } from './sales-by-category.component';

describe('SalesByCategoryComponent', () => {
  let component: SalesByCategoryComponent;
  let fixture: ComponentFixture<SalesByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesByCategoryComponent]
    });
    fixture = TestBed.createComponent(SalesByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
