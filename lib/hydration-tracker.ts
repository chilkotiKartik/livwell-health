/**
 * Daily hydration intake calculation & milestone progress tracking for LivWell.
 */

export interface HydrationProfile {
  weightKg: number;
  activityMinutes: number;
  climateFactor: 1.0 | 1.15; // 1.0 = standard, 1.15 = hot/humid
}

export function calculateDailyWaterTargetMl(profile: HydrationProfile): number {
  const baseMl = profile.weightKg * 35; // 35ml per kg bodyweight
  const exerciseMl = (profile.activityMinutes / 30) * 350; // 350ml per 30 mins workout
  const totalMl = (baseMl + exerciseMl) * profile.climateFactor;
  return Math.round(totalMl);
}