import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cube } from './cube.js';

test('cube', () => {
  assert.equal(cube(2), 4);
});
