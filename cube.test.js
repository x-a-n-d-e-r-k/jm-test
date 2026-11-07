import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cube } from './cube.js';

test('cube returns n * n * n', () => {
  assert.equal(cube(2), 8);
  assert.equal(cube(3), 27);
  assert.equal(cube(-2), -8);
  assert.equal(cube(0), 0);
});
