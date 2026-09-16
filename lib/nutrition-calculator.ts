/**
 * Scientific nutrition and metabolic calculation engine for LivWell Health.
 * Implements Mifflin-St Jeor equation and personalized macronutrient splits.
 */

export interface UserBiometrics {
  weightKg: number;
  heightCm: number;
  ageYears: number;
  gender: 'male' | 'female';
  activityLevel: 1.2 | 1.375 | 1.55 | 1.725 | 1.9;
}

export interface MacroDistribution {
  bmr: number;
  tdee: number;
  proteinGrams: number;
  carbsGrams: number;
  fatsGrams: number;
}

export function calculateMetabolicTargets(biometrics: UserBiometrics): MacroDistribution {
  const { weightKg, heightCm, ageYears, gender, activityLevel } = biometrics;

  // Mifflin-St Jeor formula
  let bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageYears;
  bmr += gender === 'male' ? 5 : -161;

  const tdee = Math.round(bmr * activityLevel);

  // Balanced target: 30% Protein, 40% Carbs, 30% Fats
  const proteinGrams = Math.round((tdee * 0.30) / 4);
  const carbsGrams = Math.round((tdee * 0.40) / 4);
  const fatsGrams = Math.round((tdee * 0.30) / 9);

  return {
    bmr: Math.round(bmr),
    tdee,
    proteinGrams,
    carbsGrams,
    fatsGrams,
  };
}