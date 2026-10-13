const test = require("node:test");
const assert = require("node:assert/strict");
const { checkPassword } = require("./password_checker");

test("detects an empty password", () => {
  assert.deepEqual(checkPassword(""), { score: 0, strength: "Empty" });
});

test("detects a weak password", () => {
  assert.equal(checkPassword("abc").strength, "Weak");
});

test("awards a point for length", () => {
  assert.equal(checkPassword("abcdefgh").score >= 1, true);
});

test("detects a strong password", () => {
  assert.equal(checkPassword("Abcd1234!xyz").strength, "Strong");
});

test("handles non-string input", () => {
  assert.equal(checkPassword(null).strength, "Empty");
});
