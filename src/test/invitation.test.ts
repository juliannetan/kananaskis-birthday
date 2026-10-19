import { describe, expect, it } from 'vitest';
import { invitation } from '@/lib/invitation';

describe('Birthday invitation requirements', () => {
  it('holds the event on Saturday November 28, 2026', () => {
    expect(invitation.date).toBe('2026-11-28');
    expect(new Date(`${invitation.date}T12:00:00Z`).getUTCDay()).toBe(6);
  });
  it('leaves Calgary around 2pm and reaches the spa by 3:30pm', () => {
    expect(invitation.departureHour).toBe(14);
    const minutesAtSpa = invitation.arrivalHour * 60 + invitation.arrivalMinute - invitation.departureHour * 60;
    expect(invitation.arrivalHour).toBe(15);
    expect(invitation.arrivalMinute).toBe(30);
    expect(minutesAtSpa).toBeGreaterThanOrEqual(75);
    expect(minutesAtSpa).toBeLessThanOrEqual(105);
  });
  it('has accommodation handled by the hosts', () => {
    expect(invitation.accommodationHandled).toBe(true);
  });
  it('tells guests to book the $173 spa pass themselves', () => {
    expect(invitation.spaPassCad).toBe(173);
    expect(invitation.spaBookingUrl).toMatch(/^https:\/\/knordicspa\.com\//);
  });
  it('points guests at the only passes left, the 4pm slots', () => {
    expect(invitation.spaSlotHour).toBe(16);
    expect(invitation.spaSlotLabel).toBe('4pm');
    expect(invitation.spaSlotHour).toBeGreaterThan(invitation.arrivalHour);
  });
  it('sends RSVP to the published Tally form', () => {
    expect(invitation.tallyUrl).toBe('https://tally.so/r/RWKekP');
  });
});
