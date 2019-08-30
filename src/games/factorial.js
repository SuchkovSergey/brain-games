import { cons } from '@hexlet/pairs';
import gameMaker from '..';
import getRandomInt from '../utils';

const factorialFinder = (num) => {
  let acc = 1;
  for (let i = 1; i <= num; i += 1) {
    acc *= i;
  }
  return acc;
};

const generateGameData = () => {
  const num = getRandomInt(1, 10);
  const correctAnswer = String(factorialFinder(num));
  const gameQuestion = String(num);
  const gameData = cons(correctAnswer, gameQuestion);
  return gameData;
};

const task = 'Find the factorial of the number!';

export default () => gameMaker(task, generateGameData);
