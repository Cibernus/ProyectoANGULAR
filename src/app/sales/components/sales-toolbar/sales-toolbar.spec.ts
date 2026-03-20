import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesToolbar } from './sales-toolbar';

describe('SalesToolbar', () => {
  let component: SalesToolbar;
  let fixture: ComponentFixture<SalesToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
