//develop 브랜치 추가
import { Console } from "@woowacourse/mission-utils";
import { ANSWERS, MESSAGES } from "./constants/messages.js";
import Computer from "./Computer.js";
import Validate from "./Validate.js";
import { FLAG } from "./constants/flag.js";

class App {
  constructor() {
    this.computer = new Computer();
    this.randomNumber = this.computer.getRandomNumber();
    console.log("this.randomNumber", this.randomNumber);
  }
  play() {
    this.printMessage(MESSAGES.START_GAME);
    this.inputNumber();
  }

  printMessage(message) {
    Console.print(message);
  }

  async inputNumber() {
    const userInputNumber = await Console.readLineAsync(MESSAGES.INPUT_NUMBER);
    Validate.isAnswer(userInputNumber);
    this.checkAnswer(userInputNumber);
  }

  checkAnswer(answer) {
    const answerArray = answer.split("").map(Number);
    const { strike, balls } = this.calculateResult(answerArray);

    if (strike === ANSWERS.THREE_STRIKE) {
      this.printMessage(MESSAGES.GAME_OVER);
      this.isReplay();
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

  async isReplay() {
    const userInputFlag = await Console.readLineAsync(MESSAGES.RESTART);
    Validate.isRestart(userInputFlag);
    userInputFlag === FLAG.YES ? this.play() : this.playQuit();
  }

  playQuit() {
    this.printMessage(MESSAGES.GAME_OVER);
  }
}

const app = new App();
app.play();

export default App;
