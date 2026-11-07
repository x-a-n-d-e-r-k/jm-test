import { test } from 'node:test';
import assert from 'node:assert/strict';
import { square } from './square.js';

test('square returns n * n', () => {
  assert.equal(square(3), 9);
  assert.equal(square(-4), 16);
  assert.equal(square(0), 0);
});
