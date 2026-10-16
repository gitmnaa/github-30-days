function validateUrl(value) {
  if (typeof value !== "string" || !value.trim()) {
    return { valid: false, reason: "URL is required" };
  }

  try {
    const url = new URL(value);

    if (!["http:", "https:"].includes(url.protocol)) {
      return { valid: false, reason: "Only HTTP and HTTPS are allowed" };
    }

    if (!url.hostname.includes(".")) {
      return { valid: false, reason: "A valid hostname is required" };
    }

    return { valid: true, reason: "Valid URL" };
  } catch {
    return { valid: false, reason: "Invalid URL format" };
  }
}

module.exports = { validateUrl };
