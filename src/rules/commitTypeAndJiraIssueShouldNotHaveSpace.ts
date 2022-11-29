import { COMMIT_EMPTY_MESSAGE } from '../types/contantes'
import { TRule } from '../types/types'
import { segmentCommitMessage } from '../utils/utils'

const commitTypeAndJiraIssueShouldNotHaveSpace: TRule = (
    parsed,
) => {
    if (parsed.raw) {
        const segmentedCommitMessage = segmentCommitMessage(parsed.raw);
        let isValid = true;
        const indexOfIssueSeparator = segmentedCommitMessage.header.indexOf('(');
        if (indexOfIssueSeparator > 0 ) {
            if (segmentedCommitMessage.header[indexOfIssueSeparator - 1] === ' ') {
                isValid = false;
            }
        } else {
            return [false, `commit must contain at least one jira issue, e.g: "fix(JIR-333): my commit message"`];
        }
        return [isValid, `commit type and issue must not be separated by witespace, e.g: "fix(JIR-333): my commit message"`]
    }
    return [false, COMMIT_EMPTY_MESSAGE];
}
export default commitTypeAndJiraIssueShouldNotHaveSpace;