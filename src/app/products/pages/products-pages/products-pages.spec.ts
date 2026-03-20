import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPages } from './products-pages';

describe('ProductsPages', () => {
  let component: ProductsPages;
  let fixture: ComponentFixture<ProductsPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
