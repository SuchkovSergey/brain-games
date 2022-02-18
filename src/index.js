import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!\n');
const greetingName = userName => console.log(`Hello, ${userName}!\n`);

const NUMBER_OF_ROUNDS = 3;

const createGameRounds = (userName, generateGameData) => {
    for (let i = 1; i <= NUMBER_OF_ROUNDS; i += 1) {
        const gameData = generateGameData();
        const { gameQuestion, correctAnswer } = gameData;
        console.log(`Question: ${gameQuestion}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === correctAnswer) {
            console.log('Correct!\n');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }
    console.log(`Congratulations,${userName}!`);
};

const createGame = (task, generateGameData) => {
    greeting();
    const userName = readlineSync.question('May I have your name? ');
    greetingName(userName);
    console.log(task);
    createGameRounds(userName, generateGameData);
};

export default createGame;
