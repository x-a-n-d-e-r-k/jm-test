import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from '../lib/add.js';

test('add returns a + b', () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-1, 1), 0);
  assert.equal(add(0.5, 0.25), 0.75);
});
