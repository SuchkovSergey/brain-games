import { cons, car, cdr } from '@hexlet/pairs';
import {
  getRandomInt, gameMaker,
} from '..';

const gcdFinder = (numOne, numTwo) => {
  let counter = 1;
  let j = 1;
  while (j <= Math.min(numOne, numTwo)) {
    if ((numOne % j === 0) && (numTwo % j === 0)) {
      counter = j;
    }
    j += 1;
  }
  return counter;
};
const argument = () => {
  const numOne = getRandomInt(1, 100);
  const numTwo = getRandomInt(1, 100);
  const correctAnswer = gcdFinder(numOne, numTwo);
  return cons(correctAnswer, cons(numOne, numTwo));
};
const questionPrint = argument1 => `Question: ${Number(car(cdr(argument1)))} and ${Number(cdr(cdr(argument1)))}`;
const task = 'Find the greatest common divisor of given numbers!';
const gcd = () => gameMaker(task, questionPrint, argument);
export default gcd;
