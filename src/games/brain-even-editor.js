import {
  greeting, getRandomInt, gameMaker,
} from '..';

const argument = () => getRandomInt(1, 100);
const questionPrint = argument1 => console.log(`Your number: ${Number(argument1)}`);
const correctAnswerFinder = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const task = () => console.log('Answer "yes" if number even otherwise answer "no"');
const isEvenNum = () => gameMaker(greeting, task, correctAnswerFinder, questionPrint, argument);
export default isEvenNum;
