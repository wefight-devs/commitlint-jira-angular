import jiraMaxLengthIssue from '../rules/jiraMaxLengthIssue';

describe('jiraMaxLengthIssue, check jira issue maxLength (default=9)', () => {

    describe('should reject the commit message', () => {

        it('The issue length is greater than value (default=9)', () => {
            const parsed = {
                raw: 'fix (I1TOTOZDZDZ): my commit message',
            };
            expect(jiraMaxLengthIssue(parsed)[0]).toEqual(false);
        });

        it('At least one issue length is greater than value (default=9)', () => {
            const parsed = {
                raw: 'fix (I1TOTOZDZDZ, JIR-33, OK-222): my commit message',
            };
            expect(jiraMaxLengthIssue(parsed)[0]).toEqual(false);
        });

        describe('with variable maxLength value', () => {
            it('The issue length is greater than value = 5', () => {
                const parsed = {
                    raw: 'fix (123456): my commit message',
                };
                expect(jiraMaxLengthIssue(parsed, undefined, 5)[0]).toEqual(false);
            });

            it('At least one issue length is greater than value = 5', () => {
                const parsed = {
                    raw: 'fix (123456, JIR-3, OK-22): my commit message',
                };
                expect(jiraMaxLengthIssue(parsed, undefined, 5)[0]).toEqual(false);
            });

        });

    });

    describe('should valid the commit message', () => {

        it('Issue length is not greater than value (default=9)', () => {
            const parsed = {
                raw: 'fix (IB-21): my commit message',
            };
            expect(jiraMaxLengthIssue(parsed)[0]).toEqual(true);
        });

        it('All issues length are not greater than value (default=9)', () => {
            const parsed = {
                raw: 'fix (IB-21, IB-768, JIRA-233): my commit message',
            };
            expect(jiraMaxLengthIssue(parsed)[0]).toEqual(true);
        });

        describe('with variable maxLength value', () => {

            it('Issue length is not greater than value = 5', () => {
                const parsed = {
                    raw: 'fix (IB-21): my commit message',
                };
                expect(jiraMaxLengthIssue(parsed, undefined, 5)[0]).toEqual(true);
            });

            it('All issues length are not greater than value = 5', () => {
                const parsed = {
                    raw: 'fix (IB-21, IB-76, JI-23): my commit message',
                };
                expect(jiraMaxLengthIssue(parsed, undefined, 5)[0]).toEqual(true);
            });
        });
    });

})