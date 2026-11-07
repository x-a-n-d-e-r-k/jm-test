import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mul } from '../lib/mul.js';

test('mul returns a * b', () => {
  assert.equal(mul(4, 3), 12);
  assert.equal(mul(-2, 3), -6);
  assert.equal(mul(7, 0), 0);
});
