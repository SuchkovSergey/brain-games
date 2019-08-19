import { cons, cdr } from '@hexlet/pairs';
import {
  getRandomInt, gameMaker,
} from '..';

const isEven = num => num % 2 === 0;
const argument = () => {
  const num = getRandomInt(1, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return cons(correctAnswer, num);
};
const questionPrint = argument1 => `Your number: ${Number(cdr(argument1))}`;
const task = 'Answer "yes" if number even otherwise answer "no"';
const isEvenNum = () => gameMaker(task, questionPrint, argument);
export default isEvenNum;
