import commitHeaderFooterSeparator from '../rules/commitHeaderFooterSeparator';
import commitTypeEmpty from '../rules/commitTypeEmpty';
import footerTypeEmpty from '../rules/footerEmpty';
import jiraEmptyIssue from '../rules/jiraEmptyIssue';
import jiraMaxLengthIssue from '../rules/jiraMaxLengthIssue';
import jiraMinLengthIssue from '../rules/jiraMinLengthIssue';
import jiraValidIssue from '../rules/jiraValidIssue';


describe('all rules to validate a jira and angular convention commit message', () => {

    const testAllRules = (parsed: { raw: string }) => {
        return {
            commitHeaderFooterSeparatorRes: commitHeaderFooterSeparator(parsed),
            commitTypeEmptyRes: commitTypeEmpty(parsed),
            footerTypeEmptyRes: footerTypeEmpty(parsed),
            jiraEmptyIssueRes: jiraEmptyIssue(parsed),
            jiraMaxLengthIssueRes: jiraMaxLengthIssue(parsed),
            jiraMinLengthIssueRes: jiraMinLengthIssue(parsed),
            jiraValidIssueRes: jiraValidIssue(parsed)
        };
    }

    describe('should validate the commit message', () => {
        it('The commit message contain one commit type and one issue with a footer tha contain information', ()=> {
            const parsed = {
                raw: 'fix(JIR-243): my commit message'
            };
            const rulesRes = testAllRules(parsed);
            expect(rulesRes.commitHeaderFooterSeparatorRes[0]).toEqual(true);
            expect(rulesRes.commitTypeEmptyRes[0]).toEqual(true);
            expect(rulesRes.footerTypeEmptyRes[0]).toEqual(true);
            expect(rulesRes.jiraEmptyIssueRes[0]).toEqual(true);
            expect(rulesRes.jiraMaxLengthIssueRes[0]).toEqual(true);
            expect(rulesRes.jiraMinLengthIssueRes[0]).toEqual(true);
            expect(rulesRes.jiraValidIssueRes[0]).toEqual(true);
        });

        it('The commit message contain one commit type and issues with a footer tha contain information', ()=> {
            const parsed = {
                raw: 'feat(JIR-243, JIR-76, IS-234): my commit message with more issues'
            };
            const rulesRes = testAllRules(parsed);
            expect(rulesRes.commitHeaderFooterSeparatorRes[0]).toEqual(true);
            expect(rulesRes.commitTypeEmptyRes[0]).toEqual(true);
            expect(rulesRes.footerTypeEmptyRes[0]).toEqual(true);
            expect(rulesRes.jiraEmptyIssueRes[0]).toEqual(true);
            expect(rulesRes.jiraMaxLengthIssueRes[0]).toEqual(true);
            expect(rulesRes.jiraMinLengthIssueRes[0]).toEqual(true);
            expect(rulesRes.jiraValidIssueRes[0]).toEqual(true);
        });


        it('The commit message contain one commit type and issues with a footer tha contain information without spaces', ()=> {
            const parsed = {
                raw: 'feat(JIR-243,JIR-76,IS-234):my commit message with more issues'
            };
            const rulesRes = testAllRules(parsed);
            expect(rulesRes.commitHeaderFooterSeparatorRes[0]).toEqual(true);
            expect(rulesRes.commitTypeEmptyRes[0]).toEqual(true);
            expect(rulesRes.footerTypeEmptyRes[0]).toEqual(true);
            expect(rulesRes.jiraEmptyIssueRes[0]).toEqual(true);
            expect(rulesRes.jiraMaxLengthIssueRes[0]).toEqual(true);
            expect(rulesRes.jiraMinLengthIssueRes[0]).toEqual(true);
            expect(rulesRes.jiraValidIssueRes[0]).toEqual(true);
        });

        it('The commit message contain one commit type and issues with a footer tha contain information without spaces with breaking change', ()=> {
            const parsed = {
                raw: `feat(JIR-243,JIR-76,IS-234): my commit message with more issues
                       
                      BREAKING CHANGE: yeah test breaking`
            };
            const rulesRes = testAllRules(parsed);
            expect(rulesRes.commitHeaderFooterSeparatorRes[0]).toEqual(true);
            expect(rulesRes.commitTypeEmptyRes[0]).toEqual(true);
            expect(rulesRes.footerTypeEmptyRes[0]).toEqual(true);
            expect(rulesRes.jiraEmptyIssueRes[0]).toEqual(true);
            expect(rulesRes.jiraMaxLengthIssueRes[0]).toEqual(true);
            expect(rulesRes.jiraMinLengthIssueRes[0]).toEqual(true);
            expect(rulesRes.jiraValidIssueRes[0]).toEqual(true);
        });
    });
});