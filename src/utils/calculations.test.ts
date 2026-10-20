import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateDistanceTraveled,
  estimateBatteryAutonomy,
  computeImbalanceMetrics,
  getTrackSectionState,
} from './calculations.ts';

test('calculateDistanceTraveled satisfies brief control values at 320 km/h', () => {
  // At 320 km/h:
  // 10 ms -> 0.9 m
  // 100 ms -> 8.9 m
  // 300 ms -> 26.7 m
  assert.equal(calculateDistanceTraveled(320, 10), 0.9);
  assert.equal(calculateDistanceTraveled(320, 100), 8.9);
  assert.equal(calculateDistanceTraveled(320, 300), 26.7);
});

test('calculateDistanceTraveled works at regular speeds', () => {
  // At 120 km/h (33.33 m/s) with 300 ms = 10.0 m
  assert.equal(calculateDistanceTraveled(120, 300), 10.0);
  // At 80 km/h with 10 ms = 0.2 m
  assert.equal(calculateDistanceTraveled(80, 10), 0.2);
});

test('estimateBatteryAutonomy outputs qualitative bracket and general range', () => {
  const frequent = estimateBatteryAutonomy(5, true);
  assert.equal(frequent.qualitativeLevel, 'Courte');
  assert.equal(frequent.generalRange, '1 à 10 ans selon le réglage');

  const optimal = estimateBatteryAutonomy(120, false);
  assert.equal(optimal.qualitativeLevel, 'Élevée (5 à 10 ans)');
  assert.equal(optimal.generalRange, '1 à 10 ans selon le réglage');
});

test('computeImbalanceMetrics shows paradox of naive model', () => {
  const naive = computeImbalanceMetrics('naive_always_healthy');
  assert.equal(naive.accuracyPercent, 99.0);
  assert.equal(naive.recallPercent, 0.0);
  assert.equal(naive.falseNegatives, 10);

  const trained = computeImbalanceMetrics('trained_ai');
  assert.equal(trained.recallPercent, 100.0);
  assert.equal(trained.falseNegatives, 0);
});

test('getTrackSectionState reflects progression of PK 16, 17, 14', () => {
  // At month 0:
  const pk16Start = getTrackSectionState(16, 0);
  assert.equal(pk16Start.status, 'a_surveiller');

  // At month 1 (> 3 weeks ~ 0.75 months):
  const pk16After = getTrackSectionState(16, 1);
  assert.equal(pk16After.status, 'critique');

  // PK 17 at month 0 is 'sain', at month 2.5 is 'a_surveiller'
  assert.equal(getTrackSectionState(17, 0).status, 'sain');
  assert.equal(getTrackSectionState(17, 2.5).status, 'a_surveiller');

  // PK 12 remains 'sain' at any month
  assert.equal(getTrackSectionState(12, 10).status, 'sain');
});
