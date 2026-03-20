import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPercentageChartComponent } from './product-percentage-chart.component';

describe('ProductPercentageChart', () => {
  let component: ProductPercentageChartComponent;
  let fixture: ComponentFixture<ProductPercentageChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPercentageChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPercentageChartComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
