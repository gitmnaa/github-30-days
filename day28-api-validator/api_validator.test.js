const test = require("node:test");
const assert = require("node:assert/strict");
const { validateResponse } = require("./api_validator");

test("accepts a valid response", () => {
  assert.equal(
    validateResponse({ status: 200, message: "OK", data: [] }).valid,
    true
  );
});

test("rejects null", () => {
  assert.equal(validateResponse(null).valid, false);
});

test("rejects a non-numeric status", () => {
  const result = validateResponse({
    status: "200", message: "OK", data: []
  });
  assert.equal(result.valid, false);
  assert.ok(result.errors.includes("Status must be a number"));
});

test("rejects an empty message", () => {
  assert.equal(
    validateResponse({ status: 200, message: " ", data: [] }).valid,
    false
  );
});

test("rejects a missing data field", () => {
  assert.equal(
    validateResponse({ status: 200, message: "OK" }).valid,
    false
  );
});
