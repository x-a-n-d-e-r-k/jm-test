import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ceil } from '../lib/ceil.js';

test('ceil rounds n up', () => {
  assert.equal(ceil(2.1), 3);
  assert.equal(ceil(-2.7), -2);
  assert.equal(ceil(5), 5);
});
