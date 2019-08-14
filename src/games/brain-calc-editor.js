import { cons, car, cdr } from '@hexlet/pairs';
import {
  greeting, getRandomInt, gameMaker,
} from '..';

const sign = () => {
  const rand = getRandomInt(0, 4);
  let answer = '*';
  if (rand === 1) {
    answer = '+';
  } if (rand === 2) {
    answer = '-';
  }
  return answer;
};
const count = (sign1, numOne, numTwo) => {
  let answer = numOne * numTwo;
  if (sign1 === '+') {
    answer = numOne + numTwo;
  } if (sign1 === '-') {
    answer = numOne - numTwo;
  }
  return answer;
};
const correctAnswerFinder = (argument2) => {
  const numOne = Number(car(cdr(argument2)));
  const numTwo = Number(cdr(cdr(argument2)));
  const sign1 = String(car(argument2));
  return count(sign1, numOne, numTwo);
};
const argument = () => cons(sign(), cons(getRandomInt(1, 100), getRandomInt(1, 100)));
const questionPrint = argument1 => console.log(`${Number(car(cdr(argument1)))} ${String(car(argument1))} ${Number(cdr(cdr(argument1)))}`);
const task = () => console.log('What is the result of the expression? ');
const calc = () => gameMaker(greeting, task, correctAnswerFinder, questionPrint, argument);
export default calc;
