import { ERROR_MESSAGES } from "./constants/messages.js";

class Validate {
  static isAnswer(answer) {
    if (isNaN(answer)) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER);
    }

    if (answer.length !== 3) {
      throw new Error(ERROR_MESSAGES.NOT_LENGTH);
    }
  }
}

export default Validate;
