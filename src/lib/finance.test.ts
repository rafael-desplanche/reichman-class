import test from 'node:test';
import assert from 'node:assert/strict';

import {
  advertisingShare,
  capexIntensity,
  freeCashFlow,
  segmentOperatingMargin,
  yoyGrowth,
} from './finance';

const approxEqual = (actual: number | null, expected: number, epsilon = 0.0006) => {
  assert.notStrictEqual(actual, null);
  assert.ok(Math.abs((actual as number) - expected) < epsilon, `Expected ${actual} ≈ ${expected}`);
};

test('2025 revenue growth is about 15.1%', () => {
  const growth = yoyGrowth(350018, 304000);
  approxEqual(growth, 0.151);
});

test('2025 advertising share is about 73.2%', () => {
  const share = advertisingShare(256000, 350018);
  approxEqual(share, 0.732);
});

test('2025 cloud operating margin is about 23.7%', () => {
  const margin = segmentOperatingMargin(27184, 114739);
  approxEqual(margin, 0.237);
});

test('2025 free cash flow equals 73266 with negative capex input', () => {
  const fcf = freeCashFlow(115877, -42611);
  assert.equal(fcf, 73266);
});

test('2025 capex intensity is about 22.7% with negative capex input', () => {
  const intensity = capexIntensity(-42611, 187713);
  approxEqual(intensity, 0.227);
});
