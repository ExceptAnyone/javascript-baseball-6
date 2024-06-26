export const MESSAGES = Object.freeze({
  START_GAME: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 :",
  NOTHING: "낫싱",
  GAME_OVER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  ONE_STRIKE: "1스트라이크",
  TWO_STRIKE: "2스트라이크",
  THREE_STRIKE: "3스트라이크",
  ONE_BALL: "1볼",
  TWO_BALL: "2볼",
  THREE_BALL: "3볼",
});

export const ANSWERS = Object.freeze({
  THREE_STRIKE: 3,
  THREE_BALL: 3,
  TWO_STRIKE: 2,
  TWO_BALL: 2,
  ONE_STRIKE: 1,
  ONE_BALL: 1,
  ZERO: 0,
});

export const ERROR_MESSAGES = Object.freeze({
  NOT_NUMBER: "숫자를 입력하세요.",
  NOT_RANGE: "10 이하의 숫자를 입력하세요.",
  NOT_LENGTH: "3개의 숫자를 입력해주세요.",
  INCLUDES_ZERO: "0이 포함되어있습니다.",
  DUPLICATE: "중복된 숫자가 있습니다.",
  ISVALID_VALUE: "올바른 입력값을 입력해주세요.",
});
