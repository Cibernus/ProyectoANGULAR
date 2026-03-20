import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesToolbar } from './employees-toolbar';

describe('EmployeesToolbar', () => {
  let component: EmployeesToolbar;
  let fixture: ComponentFixture<EmployeesToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
