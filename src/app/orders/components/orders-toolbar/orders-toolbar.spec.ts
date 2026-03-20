import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersToolbar } from './orders-toolbar';

describe('OrdersToolbar', () => {
  let component: OrdersToolbar;
  let fixture: ComponentFixture<OrdersToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
