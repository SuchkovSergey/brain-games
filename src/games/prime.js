import { cons, cdr } from '@hexlet/pairs';
import {
  getRandomInt, gameMaker,
} from '..';

const isPrimeBool = (num) => {
  for (let i = 2; i < (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const argument = () => {
  const num = getRandomInt(1, 100);
  const correctAnswer = isPrimeBool(num) ? 'yes' : 'no';
  return cons(correctAnswer, num);
};
const questionPrint = argument1 => `Your number: ${Number(cdr(argument1))}`;
const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = () => gameMaker(task, questionPrint, argument);
export default isPrime;
