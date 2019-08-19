import readlineSync from 'readline-sync';
import { car } from '@hexlet/pairs';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const greeting = () => console.log('Welcome to the Brain Games!\n');
const greetingName = userName => console.log(`Hello, ${userName}!\n`);
const endGame = (answer, correctAnswer, userName) => {
  if (String(answer) === String(correctAnswer)) {
    console.log('Correct!\n');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  }
};
const loop = (userName, funcprint, argument) => {
  let i = 1;
  while (i < 4) {
    const argument1 = argument();
    console.log(funcprint(argument1));
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = car(argument1);
    endGame(answer, correctAnswer, userName);
    if (String(answer) !== String(correctAnswer)) return;
    i += 1;
  }
  console.log(`Congratulations,${userName}!`);
};
const gameMaker = (task1, questionPrint1, argument1) => {
  greeting();
  console.log(task1);
  const userName = readlineSync.question('May I have your name? ');
  greetingName(userName);
  loop(userName, questionPrint1, argument1);
};

export {
  greeting, greetingName, getRandomInt, gameMaker,
};
