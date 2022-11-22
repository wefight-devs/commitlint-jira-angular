import { COMMIT_EMPTY_MESSAGE, JIRA_ISSUE_SEPERATOR } from '../../types/contantes'
import { TRule } from '../../types/types'
import { segmentCommitMessage } from '../utils/utils'

const jiraValidIssue: TRule = (
    parsed,
    _when,
    value = JIRA_ISSUE_SEPERATOR
) => {
    if (!['-', '_'].includes(value.toString())) return [false, 'valid separator for jira issue are - or _'];
    if (parsed.raw) {
        const segmentedCommitMessage = segmentCommitMessage(parsed.raw);
        let isValid = true;
        for (const issue of segmentedCommitMessage.issues) {
            const findedSeparators = issue.match(
                new RegExp(`${value}`, 'ig'),
            );
            isValid = (findedSeparators && findedSeparators[0]) ? true : false;
        }
        return [isValid, `jira issues are not well formated example=>  fix (JIR${value}333): my commit message`]
    }
    return [false, COMMIT_EMPTY_MESSAGE];
}
export default jiraValidIssue;