module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [true, { ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"] }],
    "comment-empty-line-before": null,
  },
};
