import { COMMIT_TYPES } from '../../types/contantes';
import commitTypeEmpty from '../commitTypeEmpty';

describe('commitTypeEmpty, check if commit message contain valid type from angular convention', () => {

    describe('should reject the commit message', () => {

        it('The commit do not contain any type', () => {
            const parsed = {
                raw: '(JIR-322): my commit message',
            }
            expect(commitTypeEmpty(parsed)[0]).toEqual(false);
        });

        it('The commit do not contain a valid type', () => {
            const parsed = {
                raw: 'not-valid (JIR-322): my commit message',
            }
            expect(commitTypeEmpty(parsed)[0]).toEqual(false);
        });

    });

    describe('should validate the commit message', () => {

        it('The commit contain a valid type', () => {
            const parsed = {
                raw: 'fix (IB-21): my commit message',
            }
            expect(commitTypeEmpty(parsed)[0]).toEqual(true);
        });

        it('The commit contain a valid type', () => {
            const parsed = {
                raw: 'fix: my commit message',
            }
            expect(commitTypeEmpty(parsed)[0]).toEqual(true);
        });

        it('The commits are using all valid type', () => {
            for (const commitType of COMMIT_TYPES) {
                const parsed = {
                    raw: `${commitType} (JI-233, JIRA-455): my commit message`,
                }
                expect(commitTypeEmpty(parsed)[0]).toEqual(true);
            }
        });
    });

})