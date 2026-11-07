import { test } from 'node:test';
import assert from 'node:assert/strict';
import { max } from '../lib/max.js';

test('max returns the larger of a and b', () => {
  assert.equal(max(2, 3), 3);
  assert.equal(max(3, 2), 3);
  assert.equal(max(-1, -5), -1);
});
