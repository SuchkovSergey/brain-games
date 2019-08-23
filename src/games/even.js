import { cons } from '@hexlet/pairs';
import gameMaker from '..';
import getRandomInt from '../utils';

const isEven = num => num % 2 === 0;
const argumentMaker = () => {
  const num = getRandomInt(1, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  const question = `${num}`;
  const finalArgument = cons(correctAnswer, question);
  return finalArgument;
};

const task = 'Answer "yes" if number even otherwise answer "no"';
export default () => gameMaker(task, argumentMaker);
