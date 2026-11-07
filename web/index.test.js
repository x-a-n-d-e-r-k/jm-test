import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('web/index.html is a minimal HTML page with heading "Hello"', () => {
  const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
  assert.match(html, /^<!DOCTYPE html>/i);
  assert.match(html, /<html lang="[^"]+">/);
  assert.match(html, /<meta charset="utf-8">/i);
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.match(html, /<h1>Hello<\/h1>/);
});
