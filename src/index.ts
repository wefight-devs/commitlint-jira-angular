import commitHeaderFooterSeparator from './rules/commitHeaderFooterSeparator'
import commitTypeEmpty from './rules/commitTypeEmpty'
import footerEmpty from './rules/footerEmpty'
import jiraEmptyIssue from './rules/jiraEmptyIssue'
import jiraMaxLengthIssue from './rules/jiraMaxLengthIssue'
import jiraMinLengthIssue from './rules/jiraMinLengthIssue'
import jiraValidIssue from './rules/jiraValidIssue'
import commitTypeAndJiraIssueShouldNotHaveSpace from './rules/commitTypeAndJiraIssueShouldNotHaveSpace'

module.exports  = {
  rules: {
    'jira-angular-commit-header-footer-separator': commitHeaderFooterSeparator,
    'jira-angular-commit-type-empty': commitTypeEmpty,
    'jira-angular-commit-footer-empty': footerEmpty,
    'jira-angular-commit-empty-issue': jiraEmptyIssue,
    'jira-angular-commit-max-length-issue': jiraMaxLengthIssue,
    'jira-angular-commit-min-length-issue': jiraMinLengthIssue,
    'jira-angular-commit-valid-issue': jiraValidIssue,
    'jira-angular-commit-type-and-jira-issue-no-separator': commitTypeAndJiraIssueShouldNotHaveSpace
  },
}