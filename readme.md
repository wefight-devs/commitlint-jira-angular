## Getting started.

##### Install dependencies

```bash
npm install --save-dev @commitlint/cli @wefight-nico.lp/commitlint-plugin-jira-angular 
```

##### Configure commitlint to use jira commits messages style config

```js
// commitlint.config.js
module.exports = {
  plugins: [
    "@wefight-nico.lp/commitlint-plugin-jira-angular"
  ],
  rules: {
    "jira-angular-commit-header-footer-separator": [
      2,
      "always",
      ":"
    ],
    "jira-angular-commit-type-empty": [
      2,
      "always"
    ],
    "jira-angular-commit-footer-empty": [
      2,
      "always"
    ],
    "jira-angular-commit-empty-issue": [
      2,
      "always"
    ],
    "jira-angular-commit-max-length-issue": [
      2,
      "always"
    ],
    "jira-angular-commit-min-length-issue": [
      2,
      "always"
    ],
    "jira-angular-commit-valid-issue": [
      2,
      "always"
    ]
  }
}
```

## Allow commits

```bash
// ✅ Allowed commit messages
git commit -m"fix (IB-2121, IB-21): My commit message body"
git commit -m"feat (IB-0000): My commit message body"
```