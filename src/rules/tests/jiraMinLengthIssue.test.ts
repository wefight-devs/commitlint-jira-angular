import jiraMinLengthIssue from '../jiraMinLengthIssue';

describe('jiraMinLengthIssue, check jira issue minLength (default=3)', () => {

    describe('should reject the commit message', () => {

        it('The issue length is shorter than value (default=3)', () => {
            const parsed = {
                raw: 'fix (I1): my commit message',
            };
            expect(jiraMinLengthIssue(parsed)[0]).toEqual(false);
        });

        it('At least one issue length is shorter than value (default=3)', () => {
            const parsed = {
                raw: 'fix (I1, JIR-33, OK-222): my commit message',
            };
            expect(jiraMinLengthIssue(parsed)[0]).toEqual(false);
        });

        describe('with variable maxLength value', () => {
            it('The issue length is shorter than value = 5', () => {
                const parsed = {
                    raw: 'fix (1234): my commit message',
                };
                expect(jiraMinLengthIssue(parsed, undefined, 5)[0]).toEqual(false);
            });

            it('At least one issue length is shorter than value = 5', () => {
                const parsed = {
                    raw: 'fix (1234, JIR-3, OK-22): my commit message',
                };
                expect(jiraMinLengthIssue(parsed, undefined, 5)[0]).toEqual(false);
            });

        });

    });

    describe('should validate the commit message', () => {

        it('Issue length is not shorter than value (default=3)', () => {
            const parsed = {
                raw: 'fix (IB-21): my commit message',
            };
            expect(jiraMinLengthIssue(parsed)[0]).toEqual(true);
        });

        it('All issues length are not shorter than value (default=3)', () => {
            const parsed = {
                raw: 'fix (IB-21, IB-768, JIRA-233): my commit message',
            };
            expect(jiraMinLengthIssue(parsed)[0]).toEqual(true);
        });

        describe('with variable maxLength value', () => {

            it('Issue length is not shorter than value = 5', () => {
                const parsed = {
                    raw: 'fix (IB-24): my commit message',
                };
                expect(jiraMinLengthIssue(parsed, undefined, 5)[0]).toEqual(true);
            });

            it('All issues length are not shorter than value = 5', () => {
                const parsed = {
                    raw: 'fix (IB-14, IB-76, JI-23): my commit message',
                };
                expect(jiraMinLengthIssue(parsed, undefined, 5)[0]).toEqual(true);
            });
        });
    });

})