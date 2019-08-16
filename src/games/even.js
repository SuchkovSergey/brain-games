import {
  getRandomInt, gameMaker, questionPrint as evenQuestion, task as evenTask,
} from '..';

const argument = () => getRandomInt(1, 100);
const isEven = num => num % 2 === 0;
const correctAnswerFinder = num => isEven(num) ? 'yes' : 'no';
const questionPrint = argument1 => evenQuestion(`Your number: ${Number(argument1)}`);
const task = () => evenTask('Answer "yes" if number even otherwise answer "no"');
const isEvenNum = () => gameMaker(task, correctAnswerFinder, questionPrint, argument);
export default isEvenNum;
