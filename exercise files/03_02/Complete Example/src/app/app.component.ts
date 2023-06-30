import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

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
  displayWeather: Weather[] = [];
  weatherSubject = new Subject<Weather>();

  private weatherData = [
    {
      day: 'Monday',
      temperature: 61,
    },
    {
      day: 'Tuesday',
      temperature: 72,
    },
    {
      day: 'Wednesday',
      temperature: 76,
    },
    {
      day: 'Thursday',
      temperature: 49,
    },
    {
      day: 'Friday',
      temperature: 53,
    },
    {
      day: 'Saturday',
      temperature: 62,
    },
    {
      day: 'Sunday',
      temperature: 77,
    },
  ];

  ngOnInit() {
    this.weatherSubject.pipe(filter(weather => {
      return weather.temperature >= 77;
    })).subscribe(weather => {
      this.displayWeather.push(weather);
    });
  }

  getWeatherData() {
    for (const weather of this.weatherData) {
      this.weatherSubject.next(weather);
    }
  }
}
