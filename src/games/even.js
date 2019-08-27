import { cons } from '@hexlet/pairs';
import gameMaker from '..';
import getRandomInt from '../utils';

const isEven = num => num % 2 === 0;

const generateGameData = () => {
  const num = getRandomInt(1, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  const gameQuestion = String(num);
  const gameData = cons(correctAnswer, gameQuestion);
  return gameData;
};

const task = 'Answer "yes" if number even otherwise answer "no"';

export default () => gameMaker(task, generateGameData);
