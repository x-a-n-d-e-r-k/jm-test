import { test } from 'node:test';
import assert from 'node:assert/strict';
import { triple } from './triple.js';

test('triple returns n * 3', () => {
  assert.equal(triple(3), 9);
  assert.equal(triple(-4), -12);
  assert.equal(triple(0), 0);
});
