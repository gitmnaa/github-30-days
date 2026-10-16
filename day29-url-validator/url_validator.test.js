const test = require("node:test");
const assert = require("node:assert/strict");
const { validateUrl } = require("./url_validator");

test("accepts HTTPS URLs", () => {
  assert.equal(validateUrl("https://github.com").valid, true);
});

test("accepts HTTP URLs", () => {
  assert.equal(validateUrl("http://example.com").valid, true);
});

test("rejects empty input", () => {
  assert.equal(validateUrl("").valid, false);
});

test("rejects invalid URL formats", () => {
  assert.equal(validateUrl("not a url").valid, false);
});

test("rejects unsupported protocols", () => {
  assert.equal(validateUrl("javascript://example.com").valid, false);
});
