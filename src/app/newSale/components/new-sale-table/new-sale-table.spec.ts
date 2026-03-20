import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSaleTable } from './new-sale-table';

describe('NewSaleTable', () => {
  let component: NewSaleTable;
  let fixture: ComponentFixture<NewSaleTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSaleTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSaleTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
