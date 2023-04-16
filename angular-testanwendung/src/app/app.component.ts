import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular Testanwendung"
  counter = 0;

  incrementCounter(): void {
    this.counter++;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}