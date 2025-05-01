/**
 * A simplified breast cancer severity prediction model.
 * This is a DEMO model that returns probabilistic results based on the input values.
 * In a real application, this would be replaced with an actual trained machine learning model.
 */
export const predictSeverity = (inputs) => {
  // Normalize each input on a scale of 0-1
  const normalizedAge = (inputs.age - 20) / 70; // Assuming age range 20-90
  
  // These features are already on a 1-10 scale, so we normalize to 0-1
  const normalizedTumorSize = (inputs.tumorSize - 1) / 9;
  const normalizedTumorShape = (inputs.tumorShape - 1) / 9;
  const normalizedMarginalAdhesion = (inputs.marginalAdhesion - 1) / 9;
  const normalizedEpithelialSize = (inputs.epithelialSize - 1) / 9;
  const normalizedBareNuclei = (inputs.bareNuclei - 1) / 9;
  const normalizedBlandChromatin = (inputs.blandChromatin - 1) / 9;
  const normalizedNormalNucleoli = (inputs.normalNucleoli - 1) / 9;
  const normalizedMitoses = (inputs.mitoses - 1) / 9;
  
  // Apply weighted calculation (these weights would come from a real ML model)
  // In a real model, these would be coefficients from logistic regression or another algorithm
  const weightedSum = 
    normalizedAge * 0.1 +
    normalizedTumorSize * 0.15 +
    normalizedTumorShape * 0.2 +
    normalizedMarginalAdhesion * 0.1 +
    normalizedEpithelialSize * 0.1 +
    normalizedBareNuclei * 0.15 +
    normalizedBlandChromatin * 0.1 +
    normalizedNormalNucleoli * 0.05 +
    normalizedMitoses * 0.05;
  
  // Apply sigmoid function to get probability between 0 and 1
  // This is a common approach in logistic regression models
  const sigmoid = (x) => 1 / (1 + Math.exp(-x * 5)); // Scaling factor of 5 to make the curve steeper
  
  // We add some random noise for demo purposes to make results vary slightly
  const noise = (Math.random() - 0.5) * 0.1; // Noise between -0.05 and 0.05
  
  // Clamp the result between 0 and 1
  return Math.max(0, Math.min(1, sigmoid(weightedSum) + noise));
};