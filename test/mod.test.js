import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mod } from '../lib/mod.js';

test('mod returns the remainder of a / b', () => {
  assert.equal(mod(7, 3), 1);
  assert.equal(mod(6, 3), 0);
  assert.equal(mod(-7, 3), -1);
});

test('mod throws on modulo by zero', () => {
  assert.throws(() => mod(1, 0), RangeError);
});
