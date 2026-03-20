import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketToolbar } from './ticket-toolbar';

describe('TicketToolbar', () => {
  let component: TicketToolbar;
  let fixture: ComponentFixture<TicketToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
