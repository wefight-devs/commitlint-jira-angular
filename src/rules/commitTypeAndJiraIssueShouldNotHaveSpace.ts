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
            return [false, `Your commit do not contain any issue. you need at least One => fix(JIR-333): my commit message`];
        }
        return [isValid, `your commit is not well formated, type and jira issue should not be separated by a witespace =>  fix(JIR-333): my commit message`]
    }
    return [false, COMMIT_EMPTY_MESSAGE];
}
export default commitTypeAndJiraIssueShouldNotHaveSpace;