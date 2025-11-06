module.exports = {
  extends: ["@commitlint/config-conventional"],
  // Allow the common first commit message without failing hooks
  ignores: [(message) => /^Initial commit(?::|$)/i.test(message)],
};
