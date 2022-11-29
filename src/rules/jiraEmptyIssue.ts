import { COMMIT_EMPTY_MESSAGE } from '../types/contantes'
import { TRule } from '../types/types'
import { segmentCommitMessage } from '../utils/utils'

const jiraEmptyIssue: TRule = (
    parsed,
) => {
    if (parsed.raw) {
        const segmentedCommitMessage = segmentCommitMessage(parsed.raw);
        return [
            segmentedCommitMessage.issues.length > 0, 
            `commit must have at least one jira issue, e.g: "fix(JIR-233): my commit message" or "fix(JIR-233, IB-455): my commit message"`
        ];
    }
    return [false, COMMIT_EMPTY_MESSAGE];
}
export default jiraEmptyIssue;