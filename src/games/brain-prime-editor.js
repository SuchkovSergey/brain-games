import readlineSync from 'readline-sync';
import {
  greeting, greetingName, loop, getRandomInt,
} from '..';

const isPrime = () => {
  greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  const userName = readlineSync.question('May I have your name? ');
  greetingName(userName);
  const argument = () => getRandomInt(1, 100);
  const questionPrint = argument1 => console.log(`${Number(argument1)}`);
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
  loop(correctAnswerFinder, userName, questionPrint, argument);
};

export default isPrime;
