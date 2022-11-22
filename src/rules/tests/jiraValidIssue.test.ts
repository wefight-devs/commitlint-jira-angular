import jiraValidIssue from '../jiraValidIssue';

describe('jiraValidIssue, check if commit message use a valid separator', () => {

    describe('should reject the commit message', () => {

        it('The commit do not valid separator (default=:)', () => {
            const parsed = {
                raw: 'feat(JIR,322): my commit message',
            }
            expect(jiraValidIssue(parsed)[0]).toEqual(false);
        });

        it('The commit do not valid separator value=,', () => {
            const parsed = {
                raw: 'fix (JIR-322): my commit message',
            }
            expect(jiraValidIssue(parsed, undefined, "_")[0]).toEqual(false);
        });

        it('The commit do not valid separator value=,', () => {
            const parsed = {
                raw: 'fix (JIR-322, JIR-233): my commit message',
            }
            expect(jiraValidIssue(parsed, undefined, "_")[0]).toEqual(false);
        });

        it('The commit do not valid separator value=,', () => {
            const parsed = {
                raw: 'fix (JIR-322, JIR-233): my commit message',
            }
            const res = jiraValidIssue(parsed, undefined, ",");
            expect(res[0]).toEqual(false);
            expect(res[1]).toEqual("valid separator for jira issue are - or _");

        });

    });

    describe('should validate the commit message', () => {

        it('The commit contain a valid separator', () => {
            const parsed = {
                raw: 'fix (IB-21): my commit message',
            }
            expect(jiraValidIssue(parsed)[0]).toEqual(true);
        });

        it('The commit contain a valid separator', () => {
            const parsed = {
                raw: 'fix (IB-21, IB-223): my commit message',
            }
            expect(jiraValidIssue(parsed)[0]).toEqual(true);
        });

        it('The commit contain a valid separator value=,', () => {
            const parsed = {
                raw: 'fix (jir_344): my commit message',
            }
            expect(jiraValidIssue(parsed, undefined, "_")[0]).toEqual(true);
        });
    });

})