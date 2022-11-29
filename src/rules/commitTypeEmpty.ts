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
            `commit must contain at least one commit type (angular convention), e.g: "fix (JIR-233): my commit type is fix"`
        ];
    }
    return [false, COMMIT_EMPTY_MESSAGE];
}
export default commitTypeEmpty