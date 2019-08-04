import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const userStart = () => {
  console.log('Welcome to the Brain Games!\n ');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
}

const play = () => {
  console.log('Welcome to the Brain Games!\n ');
  console.log('Answer \"yes\" if number even otherwise answer \"no\" ');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const One = getRandomInt(1, 100);
  console.log(`Question: ${One}`);
  const numOne = readlineSync.question('Your answer: ');
  if (((numOne === "yes") && (One % 2 === 0)) || ((numOne === "no") && (One % 2 > 0))) {
    console.log('Correct!\n');
    } else {
    return console.log(`\'${numOne}\' is wrong answer ;(. Correct answer was \'no\'.\n
Let\'s try again, ${userName}!`);
}
  const Two = getRandomInt(1, 100);
  console.log(`Question: ${Two}`);
 const numTwo = readlineSync.question('Your answer: ');
  if (((numTwo === "yes") && (Two % 2 === 0)) || ((numTwo === "no") && (Two % 2 > 0))) {
    console.log('You\'re right!\n');
    } else {
    return console.log(`\'${numTwo}\' is wrong answer ;(. Correct answer was \'yes\'.\n
Let\'s try again, ${userName}!`);
}
  const Three = getRandomInt(1, 100);
  console.log(`Question: ${Three}`);
const numThree = readlineSync.question('Your answer: ');
   if (((numThree === "yes") && (Three % 2 === 0)) || ((numThree === "no") && (Three % 2 > 0))) {
    console.log('So clever player, yeeeaaahhh!');
    console.log(`Congratulations,${userName}!`);
    } else {
    return console.log(`\'${numThree}\' is wrong answer ;(. Correct answer was \'no\'.\n
Let\'s try again, ${userName}!`);
}
}

  const sign = () => {
    const rand = getRandomInt(0,4);
    if (rand === 1) {
      return '+';
      } else if (rand === 2) {
      return '-';
      } else {
      return '*';
     }
   }


const calc = () => {
  console.log('Welcome to the Brain Games!\n ');
  console.log('What is the result of the expression? ');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
 
 const one1 = getRandomInt(1, 100);
 const two1 = getRandomInt(1, 100);
 const sign1 = sign();

  console.log(`Question: ${one1} ${sign1} ${two1}`);
  const numOne = readlineSync.question('Your answer: ');
 
 const count = (sign1, one, two) => {
if (sign1 === '+') {
return one + two;
 } else if (sign1 === '-') {
 return one - two;
} else { 
return one * two;
}
}
 const count1 = count(sign1, one1, two1);
 if (Number(numOne) === count1) {
   
 console.log('Correct!\n');
    } else {
    return console.log(`\'${numOne}\' is wrong answer ;(. Correct answer was \'${count1}\'.\n
Let\'s try again, ${userName}!`);
}
 const one2 = getRandomInt(1, 100);
 const two2 = getRandomInt(1, 100);
 const sign2 = sign();

  console.log(`Question: ${one2} ${sign2} ${two2}`);
  const numOne2 = readlineSync.question('Your answer: ');

 const count2 = count(sign2, one2, two2);
 if (Number(numOne2) === count2) {

 console.log('Correct!\n');
    } else {
    return console.log(`\'${numOne2}\' is wrong answer ;(. Correct answer was \'${count2}\'.\n
Let\'s try again, ${userName}!`);
}

 const one3 = getRandomInt(1, 100);
 const two3 = getRandomInt(1, 100);
 const sign3 = sign();

  console.log(`Question: ${one3} ${sign3} ${two3}`);
  const numOne3 = readlineSync.question('Your answer: ');

 const count3 = count(sign3, one3, two3);
 if (Number(numOne3) === count3) {

 console.log('Correct!\n');
    console.log('So clever player, yeeeaaahhh!');
    console.log(`Congratulations,${userName}!`);
    } else {
    return console.log(`\'${numOne3}\' is wrong answer ;(. Correct answer was \'${count3}\'.\n
Let\'s try again, ${userName}!`);
}
}
export {calc, userStart, play};
