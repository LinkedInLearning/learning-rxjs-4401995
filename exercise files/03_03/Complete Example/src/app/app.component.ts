import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayFirstPage = true;

  constructor() {}

  togglePages() {
    this.displayFirstPage = !this.displayFirstPage;
  }
}
