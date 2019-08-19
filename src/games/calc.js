import { cons, car, cdr } from '@hexlet/pairs';
import {
  getRandomInt, gameMaker,
} from '..';

const sign = () => '+-*'.charAt(Math.floor(Math.random() * '+-*'.length));
const count = (sign1, numOne, numTwo) => {
  let result;
  switch (sign1) {
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
const argument = () => {
  const sign1 = sign();
  const numOne = getRandomInt(1, 100);
  const numTwo = getRandomInt(1, 100);
  const correctAnswer = count(sign1, numOne, numTwo);
  return cons(correctAnswer, cons(sign1, cons(numOne, numTwo)));
};
const questionPrint = argument1 => `${Number(car(cdr(cdr(argument1))))} ${String(car(cdr(argument1)))} ${Number(cdr(cdr(cdr(argument1))))}`;
const task = 'What is the result of the expression? ';
const calc = () => gameMaker(task, questionPrint, argument);
export default calc;
