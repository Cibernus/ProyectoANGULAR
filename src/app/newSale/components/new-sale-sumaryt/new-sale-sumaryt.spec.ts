import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSaleSumaryt } from './new-sale-sumaryt';

describe('NewSaleSumaryt', () => {
  let component: NewSaleSumaryt;
  let fixture: ComponentFixture<NewSaleSumaryt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSaleSumaryt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSaleSumaryt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
