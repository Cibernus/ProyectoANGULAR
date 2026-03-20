import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersToolbar } from './suppliers-toolbar';

describe('SuppliersToolbar', () => {
  let component: SuppliersToolbar;
  let fixture: ComponentFixture<SuppliersToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliersToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliersToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
