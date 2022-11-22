import commitHeaderFooterSeparator from '../rules/commitHeaderFooterSeparator';

describe('commitHeaderFooterSeparator, check if commit message use a valid separator', () => {

    describe('should reject the commit message', () => {

        it('The commit do not valid separator (default=:)', () => {
            const parsed = {
                raw: 'feat(JIR-322) - my commit message',
            }
            expect(commitHeaderFooterSeparator(parsed)[0]).toEqual(false);
        });

        it('The commit do not valid separator value=,', () => {
            const parsed = {
                raw: 'fix (JIR-322): my commit message',
            }
            expect(commitHeaderFooterSeparator(parsed, undefined, ",")[0]).toEqual(false);
        });

    });

    describe('should valid the commit message', () => {

        it('The commit contain a valid separator', () => {
            const parsed = {
                raw: 'fix (IB-21): my commit message',
            }
            expect(commitHeaderFooterSeparator(parsed)[0]).toEqual(true);
        });

        it('The commit contain a valid separator value=,', () => {
            const parsed = {
                raw: 'fix (jir-344), my commit message',
            }
            expect(commitHeaderFooterSeparator(parsed, undefined, ",")[0]).toEqual(true);
        });
    });

})