import footerEmpty from '../footerEmpty';

describe('footerEmpty, check if commit message contain footer', () => {

    describe('should reject the commit message', () => {

        it('The commit do not contain footer but a separator', () => {
            const parsed = {
                raw: 'fix:',
            }
            expect(footerEmpty(parsed)[0]).toEqual(false);
        });

        it('The commit do not contain footer', () => {
            const parsed = {
                raw: 'I am not a conventionnal commit',
            }
            expect(footerEmpty(parsed)[0]).toEqual(false);
        });

    });

    describe('should validate the commit message', () => {

        it('The commit contain a footer', () => {
            const parsed = {
                raw: 'fix (IB-21): my commit message',
            }
            expect(footerEmpty(parsed)[0]).toEqual(true);
        });

        it('The commit contain at least a footer', () => {
            const parsed = {
                raw: 'fix : my commit message',
            }
            expect(footerEmpty(parsed)[0]).toEqual(true);
        });
    });

})