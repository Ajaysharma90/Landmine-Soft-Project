/**
 * Simple form validation utility.
 * @param {Object} rules  - Field rules: { fieldName: { req, email, min, match } }
 * @param {Object} data   - Form values: { fieldName: value }
 * @returns {Object}      - Error map: { fieldName: 'error message' }
 */
export function validate(rules, data) {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const rule  = rules[field];
    const value = (data[field] || '').trim();

    if (rule.req && !value) {
      errors[field] = 'This field is required.';
      return;
    }

    if (rule.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors[field] = 'Enter a valid email address.';
      return;
    }

    if (rule.min && value.length < rule.min) {
      errors[field] = `Minimum ${rule.min} characters required.`;
      return;
    }

    if (rule.match && value !== data[rule.match]) {
      errors[field] = "Passwords don't match.";
      return;
    }
  });

  return errors;
}

/**
 * Returns password strength 0–4.
 */
export function passwordStrength(password) {
  if (!password) return 0;
  return [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;
}

export const STRENGTH_LABELS = ['', 'Weak', 'Fair', 'Good', 'Strong'];
export const STRENGTH_COLORS = ['', '#ef4444', '#f59e0b', '#22c55e', 'var(--p1)'];
