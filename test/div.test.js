import { test } from 'node:test';
import assert from 'node:assert/strict';
import { div } from '../lib/div.js';

test('div returns a / b', () => {
  assert.equal(div(6, 3), 2);
  assert.equal(div(1, 4), 0.25);
  assert.equal(div(-9, 3), -3);
});

test('div throws on division by zero', () => {
  assert.throws(() => div(1, 0), RangeError);
});
