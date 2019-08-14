import {
  greeting, getRandomInt, gameMaker,
} from '..';

const argument = () => getRandomInt(1, 100);
const questionPrint = argument1 => console.log(`Your number: ${Number(argument1)}`);
const correctAnswerFinder = (num) => {
  let correctAnswer = 'yes';
  let j = 2;
  while (j < (num / 2)) {
    if (num % j === 0) {
      correctAnswer = 'no';
    }
    j += 1;
  }
  return correctAnswer;
};
const task = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
const isPrime = () => gameMaker(greeting, task, correctAnswerFinder, questionPrint, argument);

export default isPrime;
