import { test } from 'node:test';
import assert from 'node:assert/strict';
import { half } from './half.js';

test('half', () => {
  assert.equal(half(4), 2);
});
