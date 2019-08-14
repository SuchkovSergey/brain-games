import readlineSync from 'readline-sync';
import {
  greeting, greetingName, loop, getRandomInt,
} from '..';

const even = (num) => {
  let answer = 'no';
  if (num % 2 === 0) {
    answer = 'yes';
  }
  return answer;
};
const argument = () => getRandomInt(1, 100);
const questionPrint = argument1 => console.log(`Your number: ${Number(argument1)}`);
const correctAnswerFinder = num => even(num);

const isEvenNum = () => {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no"');
  const userName = readlineSync.question('May I have your name? ');
  greetingName(userName);
  loop(correctAnswerFinder, userName, questionPrint, argument);
};

export default isEvenNum;
