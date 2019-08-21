import { cons, cdr } from '@hexlet/pairs';
import { getRandomInt, gameMaker } from '..';

const argumentMaker = () => {
  const startNum = getRandomInt(0, 11);
  const step = getRandomInt(1, 7);
  const blindNum = getRandomInt(0, 10);
  const arr = [];
  arr[0] = startNum;
  for (let j = 1; j < 10; j += 1) {
    arr[j] = arr[j - 1] + step;
  }
  const blindArr = arr[blindNum];
  arr[blindNum] = '..';
  return cons(blindArr, arr);
};
const questionPrint = argument => `${cdr(argument)}`;
const task = 'What number is missing in the progression?';
export default () => gameMaker(task, questionPrint, argumentMaker);
