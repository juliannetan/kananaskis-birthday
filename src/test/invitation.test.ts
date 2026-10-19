import { describe, expect, it } from 'vitest';
import { invitation } from '@/lib/invitation';

describe('Birthday invitation requirements', () => {
  it('holds the event on Saturday November 28, 2026', () => {
    expect(invitation.date).toBe('2026-11-28');
    expect(new Date(`${invitation.date}T12:00:00Z`).getUTCDay()).toBe(6);
  });
  it('leaves around noon and arrives around 1:15pm', () => {
    expect(invitation.departureHour).toBe(12);
    expect(invitation.arrivalHour * 60 + invitation.arrivalMinute - invitation.departureHour * 60).toBe(75);
  });
  it('has accommodation handled by the hosts', () => {
    expect(invitation.accommodationHandled).toBe(true);
  });
  it('sends RSVP to the published Tally form', () => {
    expect(invitation.tallyUrl).toBe('https://tally.so/r/RWKekP');
  });
});
