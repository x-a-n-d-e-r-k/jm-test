import { test } from 'node:test';
import assert from 'node:assert/strict';
import { floor } from '../lib/floor.js';

test('floor rounds n down', () => {
  assert.equal(floor(2.7), 2);
  assert.equal(floor(-2.1), -3);
  assert.equal(floor(5), 5);
});
