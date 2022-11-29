import commitTypeAndJiraIssueShouldNotHaveSpace from '../commitTypeAndJiraIssueShouldNotHaveSpace';

describe('commitTypeEmpty, check if commit message contain valid type from angular convention', () => {

    describe('should reject the commit message', () => {

        it('The commit do not contain any type', () => {
            const parsed = {
                raw: 'fix (JIR-322): my commit message',
            }
            expect(commitTypeAndJiraIssueShouldNotHaveSpace(parsed)[0]).toEqual(false);
            expect(commitTypeAndJiraIssueShouldNotHaveSpace(parsed)[1]).toEqual("your commit is not well formated, type and jira issue should not be separated by a witespace =>  fix(JIR-333): my commit message");
        });

        it('The commit contain a valid type', () => {
            const parsed = {
                raw: 'feat: my commit message',
            }
            expect(commitTypeAndJiraIssueShouldNotHaveSpace(parsed)[0]).toEqual(false);
            expect(commitTypeAndJiraIssueShouldNotHaveSpace(parsed)[1]).toEqual("Your commit do not contain any issue. you need at least One => fix(JIR-333): my commit message");

        });
    });

    describe('should validate the commit message', () => {

        it('The commit contain a valid type', () => {
            const parsed = {
                raw: 'fix(IB-21): my commit message',
            }
            expect(commitTypeAndJiraIssueShouldNotHaveSpace(parsed)[0]).toEqual(true);
        });
    });

})