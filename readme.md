## Getting started.

##### Install dependencies

```bash
npm install --save-dev @commitlint/cli @wefight-dev/commitlint-plugin-jira-angular
```

## Allowed commits

```bash
✅ Allowed commit messages
--------------------------
git commit -m "fix(IB-2121, IB-21): My commit message body"
git commit -m "feat(IB-0000): My commit message body"
git commit -m "feat(IJ-4200): My commit message body
              
               BREAKING CHANGE: Something is breaking",

❌ Not Allowed commit messages
--------------------------
git commit -m "fix (IB-2121, IB-21): My commit message body"
git commit -m "feat: My commit message body"
git commit -m "feat commit message body"
```

##### Configure commitlint to use jira commits messages style config

```js
// commitlint.config.js
module.exports = {
  plugins: [
    "@wefight-dev/commitlint-plugin-jira-angular"
  ],
  rules: {
    // rule to check separator between commit header and footer (default=":")
    "jira-angular-commit-header-footer-separator": [
      2,
      "always",
      ":"
    ],
    // rule to check if commit contain at least one commit type: 'fix', 'feat', 'chore', 'docs', 'style', 'refactor', 'perf', 'test'
    "jira-angular-commit-type-empty": [
      2,
      "always"
    ],
    // rule to check if commit contain a footer, e.g: git commit -m "header:footer"
    "jira-angular-commit-footer-empty": [
      2,
      "always"
    ],
    // rule to check if commit contain at least one jira issue
    "jira-angular-commit-empty-issue": [
      2,
      "always"
    ],
    // rule to check max-length of jira issue (default=9)
    "jira-angular-commit-max-length-issue": [
      2,
      "always",
      9
    ],
    // rule to check min-length of jira issue (default=3)
    "jira-angular-commit-min-length-issue": [
      2,
      "always",
      3
    ],
    // rule to check if commit jira issue are well formated (default="-")
    "jira-angular-commit-valid-issue": [
      2,
      "always",
      "-"
    ],
    // rule to check if commit type and jira issue are not separated by whitespace (need for semantic-release to works)
    "jira-angular-commit-type-and-jira-issue-no-separator": [
      2,
      "always"
    ]
  }
}
```