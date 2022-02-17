import createGame from '..';
import { getRandomInt } from '../utils';

const SIGNS = '+-*';
const getSign = () => SIGNS.charAt(getRandomInt(0, SIGNS.length));

const count = (sign, numOne, numTwo) => {
    let result;
    switch (sign) {
    case '+':
        result = numOne + numTwo;
        break;
    case '-':
        result = numOne - numTwo;
        break;
    default:
        result = numOne * numTwo;
        break;
    }
    return result;
};

const generateGameData = () => {
    const sign = getSign();
    const numOne = getRandomInt(1, 100);
    const numTwo = getRandomInt(1, 100);
    const correctAnswer = String(count(sign, numOne, numTwo));
    const gameQuestion = `${numOne} ${sign} ${numTwo}`;
    return { correctAnswer, gameQuestion };
};

const taskText = 'What is the result of the expression?';

export default () => createGame(taskText, generateGameData);
