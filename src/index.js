import readlineSync from 'readline-sync';
import { car } from '@hexlet/pairs';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const greeting = () => console.log('Welcome to the Brain Games!\n');
const greetingName = userName => console.log(`Hello, ${userName}!\n`);
const endGame = (answer, correctAnswer, userName) => {
  if (String(answer) === String(correctAnswer)) {
    console.log('Correct!\n');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
  }
};
const loop = (userName, funcPrint, argumentMaker) => {
  for (let i = 1; i < 4; i += 1) {
    const argument = argumentMaker();
    console.log(`Question: ${funcPrint(argument)}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = car(argument);
    endGame(answer, correctAnswer, userName);
    if (String(answer) !== String(correctAnswer)) return;
  }
  console.log(`Congratulations,${userName}!`);
};
const gameMaker = (task, questionPrint, argumentMaker) => {
  greeting();
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  greetingName(userName);
  loop(userName, questionPrint, argumentMaker);
};

export {
  greeting, greetingName, getRandomInt, gameMaker,
};
