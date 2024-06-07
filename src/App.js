import { Console } from "@woowacourse/mission-utils";
import { ANSWERS, MESSAGES } from "./constants/messages.js";
import Computer from "./Computer.js";
import Validate from "./Validate.js";

class App {
  constructor() {
    this.computer = new Computer();
    this.randomNumber = this.computer.getRandomNumber();
  }
  play() {
    this.printMessage(MESSAGES.START_GAME);
    this.inputNumber();
    console.log("this.randomNumber", this.randomNumber);
  }

  printMessage(message) {
    Console.print(message);
  }

  inputNumber() {
    Console.readLine(MESSAGES.INPUT_NUMBER, (answer) => {
      console.log("answer", answer.length);
      Validate.isAnswer(answer);
      this.checkAnswer(answer);
    });
  }

  checkAnswer(answer) {
    const answerArray = answer.split("").map(Number);
    console.log("answerArray", answerArray);
    const { strike, balls } = this.calculateResult(answerArray);

    if (strike === ANSWERS.THREE_STRIKE) {
      this.printMessage(MESSAGES.GAME_OVER);
      // this.playQuit();
    } else {
      this.printMessage(`${strike} 스트라이크, ${balls} 볼`);
      this.inputNumber();
    }
  }

  calculateResult(answerArray) {
    let strike = 0;
    let balls = 0;

    answerArray.forEach((answer, index) => {
      if (answer === this.randomNumber[index]) {
        strike++;
      } else if (this.randomNumber.includes(answer)) {
        balls++;
      }
    });

    return { strike, balls };
  }

  playQuit() {
    Console.close();
  }
}

const app = new App();
app.play();

export default App;
