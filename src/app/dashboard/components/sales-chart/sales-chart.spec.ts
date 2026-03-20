import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesChartComponent } from './sales-chart.component';

describe('SalesChart', () => {
  let component: SalesChartComponent;
  let fixture: ComponentFixture<SalesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesChartComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
