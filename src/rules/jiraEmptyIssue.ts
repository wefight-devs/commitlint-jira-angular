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
            `the commit message must provide minimum one jira issue id, exemple => fix (JIR-233, JIRA-555): my commit message or fix (JIR-233): my commit message`
        ];
    }
    return [false, COMMIT_EMPTY_MESSAGE];
}
export default jiraEmptyIssue;