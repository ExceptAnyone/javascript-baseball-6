import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/messages.js";

class App {
  play() {
    this.printMessage(MESSAGES.START_GAME);
    this.inputNumber();
  }

  printMessage(message) {
    Console.print(message);
  }

  inputNumber() {
    Console.readLineAsync(MESSAGES.INPUT_NUMBER);
  }
}

const app = new App();
app.play();

export default App;
