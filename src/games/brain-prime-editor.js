import {
  greeting, getRandomInt, gameMaker,
} from '..';

const argument = () => getRandomInt(1, 100);
const questionPrint = argument1 => console.log(`Your number: ${Number(argument1)}`);
const correctAnswerFinder = (num) => {
  for (let i = 2; i < (num / 2); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const task = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
const isPrime = () => gameMaker(greeting, task, correctAnswerFinder, questionPrint, argument);
export default isPrime;
