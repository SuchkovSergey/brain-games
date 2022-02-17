import createGame from '..';
import { getRandomInt } from '../utils';

const getFactorial = (num) => {
    let acc = 1;
    for (let i = 1; i <= num; i += 1) {
        acc *= i;
    }
    return acc;
};

const generateGameData = () => {
    const num = getRandomInt(1, 10);
    const correctAnswer = String(getFactorial(num));
    const gameQuestion = String(num);
    return { correctAnswer, gameQuestion };
};

const taskText = 'Find the factorial of the number!';

export default () => createGame(taskText, generateGameData);
