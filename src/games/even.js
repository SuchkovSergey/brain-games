import createGame from '..';
import { getRandomInt } from '../utils';

const getIsEven = num => num % 2 === 0;

const generateGameData = () => {
    const num = getRandomInt(1, 100);
    const correctAnswer = getIsEven(num) ? 'yes' : 'no';
    const gameQuestion = String(num);
    return { correctAnswer, gameQuestion };
};

const taskText = 'Answer "yes" if number even otherwise answer "no"';

export default () => createGame(taskText, generateGameData);
