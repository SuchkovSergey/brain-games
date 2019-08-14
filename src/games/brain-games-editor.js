import readlineSync from 'readline-sync';
import {
  greeting, greetingName,
} from '..';

const welcomeGames = () => {
  greeting();
  const userName = readlineSync.question('May I have your name? ');
  greetingName(userName);
};

export default welcomeGames;
