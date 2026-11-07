import { test } from 'node:test';
import assert from 'node:assert/strict';
import { round } from '../lib/round.js';

test('round rounds n to the nearest integer', () => {
  assert.equal(round(2.4), 2);
  assert.equal(round(2.5), 3);
  assert.equal(round(-2.6), -3);
});
