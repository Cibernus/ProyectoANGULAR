import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesToolbar } from './deliveries-toolbar';

describe('DeliveriesToolbar', () => {
  let component: DeliveriesToolbar;
  let fixture: ComponentFixture<DeliveriesToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveriesToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveriesToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
