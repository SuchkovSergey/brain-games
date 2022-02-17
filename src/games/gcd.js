import createGame from '..';
import { getRandomInt } from '../utils';

const findGCD = (numOne, numTwo) => {
    const maxNum = Math.max(Math.abs(numOne), Math.abs(numTwo));
    const minNum = Math.min(Math.abs(numOne), Math.abs(numTwo));
    const remainder = maxNum % minNum;
    return remainder === 0 ? minNum : findGCD(minNum, remainder);
};

const generateGameData = () => {
    const numOne = getRandomInt(-100, 100);
    const numTwo = getRandomInt(-100, 100);
    const correctAnswer = String(findGCD(numOne, numTwo));
    const gameQuestion = `${numOne} and ${numTwo}`;
    return { correctAnswer, gameQuestion };
};

const taskText = 'Find the greatest common divisor of given numbers!';

export default () => createGame(taskText, generateGameData);
