import createGame from '..';
import { getRandomInt } from '../utils';

const PROGRESSION_LENGTH = 10;

const generateGameData = () => {
    const startNum = getRandomInt(-10, 20);
    const step = getRandomInt(1, 7);
    const blindNum = getRandomInt(0, PROGRESSION_LENGTH);
    const numbers = [];
    for (let j = 0; j < PROGRESSION_LENGTH; j += 1) {
        numbers[j] = startNum + j * step;
    }
    const correctAnswer = String(numbers[blindNum]);
    numbers[blindNum] = '..';
    const gameQuestion = numbers.join(' ');
    return { correctAnswer, gameQuestion };
};

const taskText = 'What number is missing in the progression?';

export default () => createGame(taskText, generateGameData);
