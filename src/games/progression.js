import { cons } from '@hexlet/pairs';
import gameMaker from '..';
import getRandomInt from '../utils';

const progressionLength = 10;

const generateGameData = () => {
  const startNum = getRandomInt(-10, 20);
  const step = getRandomInt(1, 7);
  const blindNum = getRandomInt(0, progressionLength);
  const arr = [];
  for (let j = 0; j < progressionLength; j += 1) {
    arr[j] = startNum + j * step;
  }
  const correctAnswer = String(arr[blindNum]);
  arr[blindNum] = '..';
  const gameQuestion = `${arr.join(' ')}`;
  const gameData = cons(correctAnswer, gameQuestion);
  return gameData;
};

const task = 'What number is missing in the progression?';

export default () => gameMaker(task, generateGameData);
