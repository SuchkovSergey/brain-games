import { cons } from '@hexlet/pairs';
import gameMaker from '..';
import getRandomInt from '../utils';

const signs = '+-*';
const signMaker = () => signs.charAt(getRandomInt(0, signs.length));

const count = (sign, numOne, numTwo) => {
  let result;
  switch (sign) {
    case '+':
      result = numOne + numTwo;
      break;
    case '-':
      result = numOne - numTwo;
      break;
    default:
      result = numOne * numTwo;
      break;
  }
  return result;
};

const generateGameData = () => {
  const sign = signMaker();
  const numOne = getRandomInt(1, 100);
  const numTwo = getRandomInt(1, 100);
  const correctAnswer = String(count(sign, numOne, numTwo));
  const gameQuestion = `${numOne} ${sign} ${numTwo}`;
  const gameData = cons(correctAnswer, gameQuestion);
  return gameData;
};

const task = 'What is the result of the expression?';

export default () => gameMaker(task, generateGameData);
