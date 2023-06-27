import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { combineLatestWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  temperatureSubject$ = new Subject<number>();
  feelsLikeSubject$ = new Subject<number>();
  temperatureDataList: number[] = [];
  inputTemperature = 0;
  inputFeelsLikeTemperature = 0;
  displayText = '';

  ngOnInit() {
    this.temperatureSubject$
      .pipe(combineLatestWith(this.feelsLikeSubject$))
      .subscribe(([temperature, feelsLikeTemperature]) => {
        this.displayText = `It's ${temperature}° F, but it feels like ${feelsLikeTemperature}° F`;
      });
  }

  setTemperature() {
    const temperature = this.inputTemperature;
    this.temperatureSubject$.next(temperature);
  }

  setInputTemperature(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.inputTemperature = parseInt(input);
  }
  setFeelsLike() {
    this.feelsLikeSubject$.next(this.inputFeelsLikeTemperature);
  }

  setInputFeelsLike(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.inputFeelsLikeTemperature = parseInt(input);
  }
}
