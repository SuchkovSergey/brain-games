import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!\n ');
console.log('Answer \"yes\" if number even otherwise answer \"no\" ');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\n`);

const play = () => {
  console.log('Question: 15');
  const numOne = readlineSync.question('Your answer: ');
  if (numOne === "no" ) {
    console.log('Correct!\n');
    } else {
    return console.log(`\'yes\' is wrong answer ;(. Correct answer was \'no\'.\n
Let\'s try again, ${userName}!`);
}
console.log('Question: 6');
  const numTwo = readlineSync.question('Your answer: ');
  if (numTwo === "yes" ) {
    console.log('You\'re right!\n');
    } else {
    return console.log(`\'no\' is wrong answer ;(. Correct answer was \'yes\'.\n
Let\'s try again, ${userName}!`);
}
console.log('Question: 7');
  const numThree = readlineSync.question('Your answer: ');
  if (numThree === "no" ) {
    console.log('So clever player, yeeeaaahhh!');
    console.log(`Congratulations,${userName}!`);
    } else {
    return console.log(`\'yes\' is wrong answer ;(. Correct answer was \'no\'.\n
Let\'s try again, ${userName}!`);
}
}
export {userName, play};
