import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSaleToolbar } from './new-sale-toolbar';

describe('NewSaleToolbar', () => {
  let component: NewSaleToolbar;
  let fixture: ComponentFixture<NewSaleToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSaleToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSaleToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
