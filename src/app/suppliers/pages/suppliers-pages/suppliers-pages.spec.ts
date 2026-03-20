import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersPages } from './suppliers-pages';

describe('SuppliersPages', () => {
  let component: SuppliersPages;
  let fixture: ComponentFixture<SuppliersPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliersPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliersPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
