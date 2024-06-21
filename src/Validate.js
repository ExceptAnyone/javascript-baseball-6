import { FLAG } from "./constants/flag.js";
import { ERROR_MESSAGES } from "./constants/messages.js";

class Validate {
  static isAnswer(answer) {
    if (isNaN(answer)) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER);
    }

    if (answer.length !== 3) {
      throw new Error(ERROR_MESSAGES.NOT_LENGTH);
    }

    if (answer.includes("0")) {
      throw new Error(ERROR_MESSAGES.INCLUDES_ZERO);
    }

    const set = new Set(answer);
    if (answer.length !== set.size) {
      throw new Error(ERROR_MESSAGES.DUPLICATE);
    }
  }

  static isRestart(answer) {
    if (answer !== FLAG.YES && answer !== FLAG.NO) {
      throw new Error(ERROR_MESSAGES.ISVALID_VALUE);
    }
  }
}

export default Validate;
