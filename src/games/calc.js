import { cons } from '@hexlet/pairs';
import gameMaker from '..';
import getRandomInt from '../utils';

const signs = '+-*';
const signMaker = () => signs.charAt(getRandomInt(1, signs.length));
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
const argumentMaker = () => {
  const sign = signMaker();
  const numOne = getRandomInt(1, 100);
  const numTwo = getRandomInt(1, 100);
  const correctAnswer = count(sign, numOne, numTwo);
  const question = `${numOne} ${sign} ${numTwo}`;
  const finalArgument = cons(correctAnswer, question);
  return finalArgument;
};
const task = 'What is the result of the expression?';
export default () => gameMaker(task, argumentMaker);
