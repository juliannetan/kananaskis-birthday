import { describe, expect, it } from 'vitest';
import { invitation } from '@/lib/invitation';

describe('Birthday invitation requirements', () => {
  it('holds the event on Saturday November 28, 2026', () => {
    expect(invitation.date).toBe('2026-11-28');
    expect(new Date(`${invitation.date}T12:00:00Z`).getUTCDay()).toBe(6);
  });
  it('leaves Calgary around 12:30pm and reaches the spa by 2pm', () => {
    expect(invitation.departureHour).toBe(12);
    expect(invitation.departureMinute).toBe(30);
    expect(invitation.departureLabel).toBe('12:30pm');
    const minutesAtSpa = invitation.arrivalHour * 60 + invitation.arrivalMinute - (invitation.departureHour * 60 + invitation.departureMinute);
    expect(invitation.arrivalHour).toBe(14);
    expect(invitation.arrivalMinute).toBe(0);
    expect(minutesAtSpa).toBeGreaterThanOrEqual(75);
    expect(minutesAtSpa).toBeLessThanOrEqual(105);
  });
  it('has the host covering the stay in Canmore, a 40 minute ride away', () => {
    expect(invitation.accommodationCovered).toBe(true);
    expect(invitation.accommodationTown).toBe('Canmore');
    expect(invitation.accommodationDriveMinutes).toBe(40);
    expect(invitation.accommodationAddressTiming).toBe('closer to the date');
  });

  it('tells guests to book the $173 spa pass themselves', () => {
    expect(invitation.spaPassCad).toBe(173);
    expect(invitation.spaBookingUrl).toMatch(/^https:\/\/book\.onagilysys\.com\//);
    expect(invitation.spaBookingUrl).toContain('date=2026-11-28');
  });
  it('prompts guests to book the 2pm spa slot', () => {
    expect(invitation.spaSlotHour).toBe(14);
    expect(invitation.spaSlotLabel).toBe('2pm');
    expect(invitation.spaSlotHour).toBe(invitation.arrivalHour);
  });
  it('sends RSVP to the published Tally form', () => {
    expect(invitation.tallyUrl).toBe('https://tally.so/r/RWKekP');
  });
});
