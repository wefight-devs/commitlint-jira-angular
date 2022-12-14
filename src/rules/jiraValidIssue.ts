import { COMMIT_EMPTY_MESSAGE, JIRA_ISSUE_SEPERATOR } from '../types/contantes'
import { TRule } from '../types/types'
import { segmentCommitMessage } from '../utils/utils'

const jiraValidIssue: TRule = (
    parsed,
    _when,
    value = JIRA_ISSUE_SEPERATOR
) => {
    if (!['-', '_'].includes(value.toString())) return [false, 'commit jira issues must have valid separator, e.g: "- or _"'];
    if (parsed.raw) {
        const segmentedCommitMessage = segmentCommitMessage(parsed.raw);
        let isValid = true;
        for (const issue of segmentedCommitMessage.issues) {
            const findedSeparators = issue.match(
                new RegExp(`${value}`, 'ig'),
            );
            isValid = (findedSeparators && findedSeparators[0]) ? true : false;
        }
        return [isValid, `commit must contain jira issue well formated, e.g: "fix(JIR${value}333): my commit message"`]
    }
    return [false, COMMIT_EMPTY_MESSAGE];
}
export default jiraValidIssue;