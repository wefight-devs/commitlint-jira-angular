import { COMMIT_EMPTY_MESSAGE } from '../../types/contantes'
import { TRule } from '../../types/types'
import { segmentCommitMessage } from '../utils/utils'

const footerEmpty: TRule = (
    parsed,
) => {
    if (parsed.raw) {
        const segmentedCommitMessage = segmentCommitMessage(parsed.raw);
        return [
            segmentedCommitMessage.footer?.length > 0,
            `the commit message footer should not be empty example => header: my footer message`
        ];
    }
    return [false, COMMIT_EMPTY_MESSAGE];
}
export default footerEmpty;