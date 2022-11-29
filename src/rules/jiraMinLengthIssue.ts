import { COMMIT_EMPTY_MESSAGE } from '../types/contantes'
import { TRule } from '../types/types'
import { segmentCommitMessage } from '../utils/utils'

const jiraMinLengthIssue: TRule = (
    parsed,
    _when,
    value = 3
) => {
    if (parsed.raw) {
        const segmentedCommitMessage = segmentCommitMessage(parsed.raw);
        return [
            !segmentedCommitMessage.issues.find(issue => issue.length < value), 
            `jira issues must not be shorter than ${value} characters`
        ];
    }
    return [false, COMMIT_EMPTY_MESSAGE];
}
export default jiraMinLengthIssue;