import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sub } from '../lib/sub.js';

test('sub returns a - b', () => {
  assert.equal(sub(5, 3), 2);
  assert.equal(sub(3, 5), -2);
  assert.equal(sub(0, 0), 0);
});
