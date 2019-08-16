import {
  getRandomInt, gameMaker, questionPrint as primeQuestion, task as primeTask,
} from '..';

const argument = () => getRandomInt(1, 100);
const correctAnswerFinder = (num) => {
  for (let i = 2; i < (num / 2); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const questionPrint = argument1 => primeQuestion(`Your number: ${Number(argument1)}`);
const task = () => primeTask('Answer "yes" if given number is prime. Otherwise answer "no"');
const isPrime = () => gameMaker(task, correctAnswerFinder, questionPrint, argument);
export default isPrime;
