import readlineSync from 'readline-sync';
import {
  greeting, greetingName,
} from '..';

export default () => {
  greeting();
  const userName = readlineSync.question('May I have your name? ');
  greetingName(userName);
};
