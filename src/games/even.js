import { cons, cdr } from '@hexlet/pairs';
import {
  getRandomInt, gameMaker,
} from '..';

const isEven = num => num % 2 === 0;
const argument = () => {
  const number = getRandomInt(1, 101);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return cons(correctAnswer, number);
};
const questionPrint = argument1 => `Your number: ${Number(cdr(argument1))}`;
const task = 'Answer "yes" if number even otherwise answer "no"';
const isEvenNum = () => gameMaker(task, questionPrint, argument);
export default isEvenNum;
