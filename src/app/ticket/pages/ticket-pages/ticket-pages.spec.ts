import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPages } from './ticket-pages';

describe('TicketPages', () => {
  let component: TicketPages;
  let fixture: ComponentFixture<TicketPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
