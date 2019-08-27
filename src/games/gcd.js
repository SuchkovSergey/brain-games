import { cons } from '@hexlet/pairs';
import gameMaker from '..';
import getRandomInt from '../utils';

const gcdFinder = (numOne, numTwo) => {
  const maxNum = Math.max(Math.abs(numOne), Math.abs(numTwo));
  const minNum = Math.min(Math.abs(numOne), Math.abs(numTwo));
  const remainder = maxNum % minNum;
  return (remainder === 0) ? minNum : gcdFinder(minNum, remainder);
};

const generateGameData = () => {
  const numOne = getRandomInt(-100, 100);
  const numTwo = getRandomInt(-100, 100);
  const correctAnswer = String(gcdFinder(numOne, numTwo));
  const gameQuestion = `${numOne} and ${numTwo}`;
  const gameData = cons(correctAnswer, gameQuestion);
  return gameData;
};

const task = 'Find the greatest common divisor of given numbers!';

export default () => gameMaker(task, generateGameData);
