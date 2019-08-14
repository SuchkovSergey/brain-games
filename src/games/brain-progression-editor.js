import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';
import {
  greeting, greetingName, loop, getRandomInt,
} from '..';

const progression = () => {
  greeting();
  console.log('What number is missing in the progression?');
  const userName = readlineSync.question('May I have your name? ');
  greetingName(userName);
  const argument = () => {
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
    return cons(startNum, cons(step, cons(blindNum, cons(arr, blindArr))));
  };
  const questionPrint = argument1 => console.log(`Sequence of numbers: ${car(cdr(cdr(cdr(argument1))))}`);
  const correctAnswerFinder = argument2 => Number(cdr(cdr(cdr(cdr(argument2)))));
  loop(correctAnswerFinder, userName, questionPrint, argument);
};

export default progression;
