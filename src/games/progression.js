import { cons } from '@hexlet/pairs';
import gameMaker from '..';
import getRandomInt from '../utils';

const amountOfNumbers = 10;
const argumentMaker = () => {
  const startNum = getRandomInt(-10, 20);
  const step = getRandomInt(1, 7);
  const blindNum = getRandomInt(0, amountOfNumbers);
  const arr = [];
  for (let j = 0; j < amountOfNumbers; j += 1) {
    arr[j] = startNum + j * step;
  }
  const correctAnswer = arr[blindNum];
  arr[blindNum] = '..';
  const question = `${arr.join(' ')}`;
  const finalArgument = cons(correctAnswer, question);
  return finalArgument;
};

const task = 'What number is missing in the progression?';
export default () => gameMaker(task, argumentMaker);
