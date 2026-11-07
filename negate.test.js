import { test } from 'node:test';
import assert from 'node:assert/strict';
import { negate } from './negate.js';

test('negate returns -n', () => {
  assert.equal(negate(3), -3);
  assert.equal(negate(-4), 4);
  assert.equal(negate(0), -0);
});
