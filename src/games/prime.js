import { cons, cdr } from '@hexlet/pairs';
import { getRandomInt, gameMaker } from '..';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const argumentMaker = () => {
  const num = getRandomInt(1, 100);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return cons(correctAnswer, num);
};
const questionPrint = argument => `${Number(cdr(argument))}`;
const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
export default () => gameMaker(task, questionPrint, argumentMaker);
