// Import stylesheets
import { questions } from './data';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

interface Question {
  Id: number;
  Word: string;
  Translation: string;
  DuplicationKey: number | null;
}

class Source {
  public Questions: Question[];

  public constructor(questions: Question[]) {
    this.Questions = questions;
  }
}

const source = new Source(questions);
const json = JSON.stringify(source);

appDiv.innerHTML = `<p>${json}</p>`;
