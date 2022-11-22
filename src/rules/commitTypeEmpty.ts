import { COMMIT_EMPTY_MESSAGE, COMMIT_TYPES } from '../types/contantes'
import { TRule } from '../types/types'
import { segmentCommitMessage } from '../utils/utils'

const commitTypeEmpty: TRule = (
    parsed,
) => {
    if (parsed.raw) {
        const segmentedCommitMessage = segmentCommitMessage(parsed.raw);
        const isValid = COMMIT_TYPES.includes(segmentedCommitMessage.commitType);
        return [
            isValid,
            `The commit message must provide one commit type on the commit message example => fix (JIR-233): my commit type is fix`
        ];
    }
    return [false, COMMIT_EMPTY_MESSAGE];
}
export default commitTypeEmpty