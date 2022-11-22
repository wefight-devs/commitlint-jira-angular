import { COMMIT_EMPTY_MESSAGE } from '../types/contantes'
import { TRule } from '../types/types'
import { segmentCommitMessage } from '../utils/utils'

const jiraMaxLengthIssue: TRule = (
    parsed,
    _when,
    value = 9
) => {
    if (parsed.raw) {
        const segmentedCommitMessage = segmentCommitMessage(parsed.raw);
        return [
            !segmentedCommitMessage.issues.find(issue => issue.length > value), 
            `Issues must not be greater than ${value} characters`
        ];
    }
    return [false, COMMIT_EMPTY_MESSAGE];
}
export default jiraMaxLengthIssue;