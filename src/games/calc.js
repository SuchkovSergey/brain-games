import { cons, car, cdr } from '@hexlet/pairs';
import { getRandomInt, gameMaker } from '..';

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
  return cons(correctAnswer, cons(sign, cons(numOne, numTwo)));
};
const questionPrint = argument => `${Number(car(cdr(cdr(argument))))} ${String(car(cdr(argument)))} ${Number(cdr(cdr(cdr(argument))))}`;
const task = 'What is the result of the expression? ';
export default () => gameMaker(task, questionPrint, argumentMaker);
