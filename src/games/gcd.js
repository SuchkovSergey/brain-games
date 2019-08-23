import { cons } from '@hexlet/pairs';
import gameMaker from '..';
import getRandomInt from '../utils';

const gcdFinder = (numOne, numTwo) => {
  const maxNum = Math.max(Math.abs(numOne), Math.abs(numTwo));
  const minNum = Math.min(Math.abs(numOne), Math.abs(numTwo));
  const remainder = maxNum % minNum;
  return (remainder === 0) ? minNum : gcdFinder(minNum, remainder);
};
const argumentMaker = () => {
  const numOne = getRandomInt(-100, 100);
  const numTwo = getRandomInt(-100, 100);
  const correctAnswer = gcdFinder(numOne, numTwo);
  const question = `${numOne} and ${numTwo}`;
  const finalArgument = cons(correctAnswer, question);
  return finalArgument;
};
const task = 'Find the greatest common divisor of given numbers!';
export default () => gameMaker(task, argumentMaker);
