import {Component} from "@angular/core";


interface LessonSummary {
  num: number;
  title: string;
}

interface Lesson {
  num: number;
  words: Word[];
}

interface Word {
  cantonese: string;
  english: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Canto master';
  lessonSummary: LessonSummary[] = [
    {num: 1, title: '1- hello'},
    {num: 2, title: '2- numbers'},
    {num: 3, title: '3- transport'},
  ].sort();
  selected: any;
  tonesCheckingEnabled: any;

  constructor() {
    this.tonesCheckingEnabled = "Enabled";
  }

  setTonesCheckingEnabled($event: Event) {
    if (this.tonesCheckingEnabled == "Enabled") {
      this.tonesCheckingEnabled = "Disabled";
    } else {
      this.tonesCheckingEnabled = "Enabled";
    }

  }
}
