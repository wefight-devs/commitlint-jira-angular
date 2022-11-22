import jiraEmptyIssue from '../jiraEmptyIssue';

describe('jiraEmptyIssue, check if jira issue is empty or not', () => {

    describe('should reject the commit message', () => {

        it('The commit do not contain jira issue', () => {
            const parsed = {
                raw: 'fix: my commit message',
            }
            expect(jiraEmptyIssue(parsed)[0]).toEqual(false);
        });

        it('The commit do not contain jira issue but separator', () => {
            const parsed = {
                raw: 'fix (): my commit message',
            }
            expect(jiraEmptyIssue(parsed)[0]).toEqual(false);
        });

    });

    describe('should validate the commit message', () => {

        it('The commit contain a jira issue', () => {
            const parsed = {
                raw: 'fix (IB-21): my commit message',
            }
            expect(jiraEmptyIssue(parsed)[0]).toEqual(true);
        });

        it('The commit contain at least one jira issue', () => {
            const parsed = {
                raw: 'fix (IB-21, IB-455): my commit message',
            }
            expect(jiraEmptyIssue(parsed)[0]).toEqual(true);
        });
    });

})