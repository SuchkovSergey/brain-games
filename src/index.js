import readlineSync from 'readline-sync';

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
const loop = (func, userName, funcprint, argument) => {
  let i = 1;
  while (i < 4) {
    const argument1 = argument();
    funcprint(argument1);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = func(argument1);
    endGame(answer, correctAnswer, userName);
    if (String(answer) !== String(correctAnswer)) return;
    i += 1;
  }
  console.log(`Congratulations,${userName}!`);
};
const gameMaker = (task1, correctAnswerFinder1, questionPrint1, argument1) => {
  greeting();
  task1();
  const userName = readlineSync.question('May I have your name? ');
  greetingName(userName);
  loop(correctAnswerFinder1, userName, questionPrint1, argument1);
};
const questionPrint = argument2 => console.log(argument2);
const task = gameTask => console.log(gameTask);
export {
  greeting, greetingName, getRandomInt, gameMaker, questionPrint, task,
};
