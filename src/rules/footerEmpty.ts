import { COMMIT_EMPTY_MESSAGE } from '../types/contantes'
import { TRule } from '../types/types'
import { segmentCommitMessage } from '../utils/utils'

const footerEmpty: TRule = (
    parsed,
) => {
    if (parsed.raw) {
        const segmentedCommitMessage = segmentCommitMessage(parsed.raw);
        return [
            segmentedCommitMessage.footer?.length > 0,
            `commit footer must not be empty, e.g "header(issue-111): my footer message"`
        ];
    }
    return [false, COMMIT_EMPTY_MESSAGE];
}
export default footerEmpty;