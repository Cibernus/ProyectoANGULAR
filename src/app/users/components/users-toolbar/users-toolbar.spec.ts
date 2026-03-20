import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersToolbar } from './users-toolbar';

describe('UsersToolbar', () => {
  let component: UsersToolbar;
  let fixture: ComponentFixture<UsersToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
