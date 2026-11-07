import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pow } from '../lib/pow.js';

test('pow returns base raised to exponent', () => {
  assert.equal(pow(2, 10), 1024);
  assert.equal(pow(5, 0), 1);
  assert.equal(pow(2, -1), 0.5);
});
