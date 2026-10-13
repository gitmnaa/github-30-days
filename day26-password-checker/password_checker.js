function checkPassword(password) {
  if (typeof password !== "string" || password.length === 0) {
    return { score: 0, strength: "Empty" };
  }

  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  const strength =
    score <= 1 ? "Weak" :
    score <= 3 ? "Medium" : "Strong";

  return { score, strength };
}

module.exports = { checkPassword };
