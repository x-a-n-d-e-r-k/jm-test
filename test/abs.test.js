import { test } from 'node:test';
import assert from 'node:assert/strict';
import { abs } from '../lib/abs.js';

test('abs returns the absolute value of n', () => {
  assert.equal(abs(-4), 4);
  assert.equal(abs(4), 4);
  assert.equal(abs(0), 0);
});
