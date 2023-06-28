import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  temperatureSubject$ = new Subject<number[]>();
  temperatureDataList: number[] = [];
  inputTemperature = 0;
  displayTemperatureText = '';
  callCount = 0;
  attemptedCallCount = 0;

  ngOnInit() {
  }

  getWeather() {
    this.attemptedCallCount = this.attemptedCallCount + 1;
    const temperatureDataList = [51, 73, 64, 21];
  }
}
