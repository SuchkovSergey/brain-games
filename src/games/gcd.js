import { cons, car, cdr } from '@hexlet/pairs';
import {
  getRandomInt, gameMaker, questionPrint as gcdQuestion, task as gcdTask,
} from '..';

const argument = () => cons(getRandomInt(1, 100), getRandomInt(1, 100));
const correctAnswerFinder = (argument2) => {
  const numOne = Number(car(argument2));
  const numTwo = Number(cdr(argument2));
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
const questionPrint = argument1 => gcdQuestion(`Question: ${Number(car(argument1))} and ${Number(cdr(argument1))}`);
const task = () => gcdTask('Find the greatest common divisor of given numbers!');
const gcd = () => gameMaker(task, correctAnswerFinder, questionPrint, argument);
export default gcd;
