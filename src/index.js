import readlineSync from 'readline-sync';
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
const greeting = () => console.log('Welcome to the Brain Games!\n ');
const nameQuestion = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
}
const even = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } else { 
    return 'no';
  }
}
const isEvenNum = () => {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no" ');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i=1; i<4; i++) {
    const number = getRandomInt(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = even(number);
    if (correctAnswer === answer) {
      console.log('Correct!\n');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
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
const count = (sign1, numOne, numTwo) => {
  if (sign1 === '+') {
    return numOne + numTwo;
  } else if (sign1 === '-') {
    return numOne - numTwo;
  } else {
    return numOne * numTwo;
  }
}
const calc = () => {
  greeting();
  console.log('What is the result of the expression? ');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i=1; i<4; i++) {
    const numOne = getRandomInt(1, 100);
    const numTwo = getRandomInt(1, 100);
    const sign1 = sign();
    console.log(`Question: ${numOne} ${sign1} ${numTwo}`);
    const answer = readlineSync.question('Your answer: ');
    const count1 = count(sign1, numOne, numTwo);
    if (Number(answer) === count1) {
      console.log('Correct!\n');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${count1}'.\n Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations,${userName}!`);
}
const nod = () => {
  greeting();
  console.log('Find the greatest common divisor of given numbers. ');
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
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${counter}'.\n Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations,${userName}!`);
}
const progression = () => {
  greeting(); 
  console.log('What number is missing in the progression? ');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i=1; i<4; i++) {
    const startNum = getRandomInt(0, 11); 
    const step = getRandomInt(1, 7);
    const blindNum = getRandomInt(0, 10);
    const arr = [];
    arr[0] = startNum;
    for (let i = 1; i < 10; i++) {
      arr[i] = arr[i-1] + step;
    }
    const realNum = arr[blindNum];
    arr[blindNum] = '..';
    console.log(`Question: ${arr}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === realNum) {
      console.log('Correct!\n');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realNum}'.\n Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations,${userName}!`);
}
const isPrime = () => {
  greeting(); 
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i=1; i<4; i++) {
    const num = getRandomInt(10, 100);
    let correctAnswer = 'yes';
    let j = 2;
    while (j < (num/2)) {
      if (num % j === 0) {
        correctAnswer = 'no';
      }
      j += 1;
    }
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) === correctAnswer) {
      console.log('Correct!\n');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations,${userName}!`);
}
export {calc, nameQuestion, greeting, isEvenNum, nod, progression, isPrime};
