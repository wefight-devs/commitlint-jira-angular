import { COMMIT_MESSAGE_SEPARATOR, COMMIT_EMPTY_MESSAGE } from "../types/contantes"
import { TRule } from "../types/types"


const commitHeaderFooterSeparator: TRule = (
  parsed,
  _when,
  value = COMMIT_MESSAGE_SEPARATOR,
) => {
  if (parsed.raw) {
    const findedSeparators = parsed.raw.match(
      new RegExp(`${value}`, 'ig'),
    );
    return [
      (findedSeparators && findedSeparators[0]) ? true : false,
      `Commit message parts must be separated with "${value}" example => fix (IB-2121)${value} My commit message body`,
    ]
  }
  return [false, COMMIT_EMPTY_MESSAGE];
}
export default commitHeaderFooterSeparator