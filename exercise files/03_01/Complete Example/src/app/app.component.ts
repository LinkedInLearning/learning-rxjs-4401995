import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

interface Weather {
  day: string;
  temperature: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  temperatureSubject$ = new Subject<Weather>();
  inputTemperature = 0;
  weatherOutput: Weather | undefined;

  selectedDay = 'Monday';

  weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  ngOnInit() {
    this.temperatureSubject$
      .pipe(
        map((weather) => {
          return {
            temperature: Math.floor(weather.temperature),
            day: weather.day,
          };
        })
      )
      .subscribe((weather) => {
        this.weatherOutput = weather;
      });
  }

  setTemperature() {
    this.temperatureSubject$.next({
      temperature: this.inputTemperature,
      day: this.selectedDay,
    });
  }

  setInputTemperature(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.inputTemperature = parseInt(input);
  }
}
