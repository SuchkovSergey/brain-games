import { cons } from '@hexlet/pairs';
import gameMaker from '..';
import getRandomInt from '../utils';

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
  const num = getRandomInt(-100, 100);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  const question = `${num}`;
  const finalArgument = cons(correctAnswer, question);
  return finalArgument;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
export default () => gameMaker(task, argumentMaker);
