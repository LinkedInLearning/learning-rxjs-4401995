import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

interface Weather {
  day: string;
  temperature: number;
}

@Component({
  selector: 'first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent implements OnInit, OnDestroy {
  temperatureSubject$ = new Subject<Weather>();
  displayWeather: Weather[] = [];
  private destroyComponent$ = new ReplaySubject<void>(0);

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
    this.temperatureSubject$
      .pipe(
        takeUntil(this.destroyComponent$),
        filter((weather) => {
          return weather.temperature >= 70;
        })
      )
      .subscribe((weather) => {
        this.displayWeather.push(weather);
      });
    for (const weather of this.weatherData) {
      this.temperatureSubject$.next(weather);
    }
  }

  ngOnDestroy() {
    this.destroyComponent$.next();
    this.destroyComponent$.complete();
    console.log('Component Destroyed');
  }
}
