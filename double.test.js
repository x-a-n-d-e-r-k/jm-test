import { test } from 'node:test';
import assert from 'node:assert/strict';
import { double } from './double.js';

test('double returns n * 2', () => {
  assert.equal(double(3), 6);
  assert.equal(double(-4), -8);
  assert.equal(double(0), 0);
});
