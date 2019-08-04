import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
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
  for (let i=1; i<4; i++) {
    const One = getRandomInt(1, 100);
    console.log(`Question: ${One}`);
    const numOne = readlineSync.question('Your answer: ');
    if (((numOne === "yes") && (One % 2 === 0)) || ((numOne === "no") && (One % 2 > 0))) {
    console.log('Correct!\n');
      } else if (One % 2 === 0) {
      return console.log(`\'${numOne}\' is wrong answer ;(. Correct answer was \'yes\'.\nLet\'s try again, ${userName}!`);
      } else {
        return console.log(`\'${numOne}\' is wrong answer ;(. Correct answer was \'no\'.\nLet\'s try again, ${userName}!`);
      }
    }
    console.log(`Congratulations,${userName}!`);
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

const count = (sign1, one, two) => {
  if (sign1 === '+') {
    return one + two;
  } else if (sign1 === '-') {
    return one - two;
  } else {
    return one * two;
  }
}

const calc = () => {
  console.log('Welcome to the Brain Games!\n \nWhat is the result of the expression? ');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i=1; i<4; i++) {
    const numOne = getRandomInt(1, 100);
    const numTwo = getRandomInt(1, 100);
    const sign = sign();
    console.log(`Question: ${numOne} ${sign} ${numTwo}`);
    const answer1 = readlineSync.question('Your answer: ');
    const count1 = count(sign, numOne, numTwo);
    if (Number(answer) === count1) {
      console.log('Correct!\n');
      } else {
        return console.log(`\'${answer}\' is wrong answer ;(. Correct answer was \'${count1}\'.\n Let\'s try again, ${userName}!`);
      }
  }
  console.log(`Congratulations,${userName}!`);
}

const nod = () => {
  console.log('Welcome to the Brain Games!\n \nFind the greatest common divisor of given numbers. ');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i=1; i<4; i++) {
    const numOne = getRandomInt(1, 100);
    const numTwo = getRandomInt(1, 100);
    console.log(`Question: ${numOne} and ${numTwo}`);
    const answer = readlineSync.question('Your answer: ');
    let counter = 1;
    let i = 1;
    while (i<=Math.min(numOne,numTwo)) {
      if ((numOne % i === 0) && (numTwo % i === 0)) {
        counter = i;
      }
      i += 1;
    }
    if (Number(answer) === counter) {
      console.log('Correct!\n');
      } else {
        return console.log(`\'${answer}\' is wrong answer ;(. Correct answer was \'${counter}\'.\n Let\'s try again, ${userName}!`);
      }
}
console.log(`Congratulations,${userName}!`);
}
export {calc, userStart, play, nod};
