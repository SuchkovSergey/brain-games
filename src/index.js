import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const greeting = () => console.log('Welcome to the Brain Games!\n');
const greetingName = userName => console.log(`Hello, ${userName}!\n`);

const numberOfIteration = 3;
const loop = (userName, generateGameData) => {
  for (let i = 1; i <= numberOfIteration; i += 1) {
    const gameData = generateGameData();
    const gameQuestion = cdr(gameData);
    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = car(gameData);
    if (answer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations,${userName}!`);
};

const gameMaker = (task, generateGameData) => {
  greeting();
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  greetingName(userName);
  loop(userName, generateGameData);
};

export default gameMaker;
