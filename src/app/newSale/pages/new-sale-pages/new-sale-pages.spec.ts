import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalePages } from './new-sale-pages';

describe('NewSalePages', () => {
  let component: NewSalePages;
  let fixture: ComponentFixture<NewSalePages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSalePages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSalePages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
