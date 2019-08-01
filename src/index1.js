import readlineSync from 'readline-sync';
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log('Welcome to the Brain Games!\n ');
console.log('Answer \"yes\" if number even otherwise answer \"no\" ');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\n`);

const play = () => {
  const One = getRandomInt(1, 100);
  console.log(`Question: ${One}`);
  const numOne = readlineSync.question('Your answer: ');
  if (((numOne === "yes") && (One % 2 === 0)) || ((numOne === "no") && (One % 2 > 0))) {
    console.log('Correct!\n');
    } else {
    return console.log(`\'yes\' is wrong answer ;(. Correct answer was \'no\'.\n
Let\'s try again, ${userName}!`);
}
  const Two = getRandomInt(1, 100);
  console.log(`Question: ${Two}`); 
 const numTwo = readlineSync.question('Your answer: ');
  if (((numTwo === "yes") && (Two % 2 === 0)) || ((numTwo === "no") && (Two % 2 > 0))) {
    console.log('You\'re right!\n');
    } else {
    return console.log(`\'no\' is wrong answer ;(. Correct answer was \'yes\'.\n
Let\'s try again, ${userName}!`);
}
  const Three = getRandomInt(1, 100);
  console.log(`Question: ${Three}`);
const numThree = readlineSync.question('Your answer: ');
   if (((numThree === "yes") && (Three % 2 === 0)) || ((numThree === "no") && (Three % 2 > 0))) {
    console.log('So clever player, yeeeaaahhh!');
    console.log(`Congratulations,${userName}!`);
    } else {
    return console.log(`\'yes\' is wrong answer ;(. Correct answer was \'no\'.\n
Let\'s try again, ${userName}!`);
}
}
export {userName, play};
