import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parse } from './parse.js';

test('parse returns the number for a numeric string', () => {
  assert.equal(parse('42'), 42);
  assert.equal(parse('-3.5'), -3.5);
});
