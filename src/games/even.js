import { cons, cdr } from '@hexlet/pairs';
import { getRandomInt, gameMaker } from '..';

const isEven = num => num % 2 === 0;
const argumentMaker = () => {
  const num = getRandomInt(1, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return cons(correctAnswer, num);
};
const questionPrint = argument => `${Number(cdr(argument))}`;
const task = 'Answer "yes" if number even otherwise answer "no"';
export default () => gameMaker(task, questionPrint, argumentMaker);
