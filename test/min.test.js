import { test } from 'node:test';
import assert from 'node:assert/strict';
import { min } from '../lib/min.js';

test('min returns the smaller of a and b', () => {
  assert.equal(min(2, 3), 2);
  assert.equal(min(3, 2), 2);
  assert.equal(min(-1, -5), -5);
});
