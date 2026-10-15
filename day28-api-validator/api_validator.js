function validateResponse(response) {
  if (!response || typeof response !== "object" || Array.isArray(response)) {
    return { valid: false, errors: ["Response must be an object"] };
  }

  const errors = [];

  if (typeof response.status !== "number") {
    errors.push("Status must be a number");
  }

  if (typeof response.message !== "string" || !response.message.trim()) {
    errors.push("Message is required");
  }

  if (!("data" in response)) {
    errors.push("Data field is required");
  }

  return { valid: errors.length === 0, errors };
}

module.exports = { validateResponse };
