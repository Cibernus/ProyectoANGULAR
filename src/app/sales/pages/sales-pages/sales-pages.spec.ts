import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPages } from './sales-pages';

describe('SalesPages', () => {
  let component: SalesPages;
  let fixture: ComponentFixture<SalesPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
