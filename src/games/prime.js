import createGame from '..';
import { getRandomInt } from '../utils';

const getIsPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= (num / 2); i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const generateGameData = () => {
    const num = getRandomInt(-100, 100);
    const correctAnswer = getIsPrime(num) ? 'yes' : 'no';
    const gameQuestion = String(num);
    return { correctAnswer, gameQuestion };
};

const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => createGame(taskText, generateGameData);
