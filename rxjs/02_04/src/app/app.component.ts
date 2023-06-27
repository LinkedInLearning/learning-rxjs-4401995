import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  temperatureSubject$ = new Subject<number>();
  inputTemperature = 0;
  displayTemperatureText = '';
  isCelsius = false;
  isTouched = false;

  ngOnInit() {
    this.temperatureSubject$.subscribe((temperature) => {
      if (this.isCelsius) {
        this.displayTemperatureText = temperature + '° C';
      } else {
        this.displayTemperatureText = temperature + '° F';
      }
      this.inputTemperature = temperature;
      this.isTouched = true;
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

  convertToCelsius() {
    this.isCelsius = true;
    const celsiusTemperature = ((this.inputTemperature - 32) * 5) / 9;
    this.temperatureSubject$.next(celsiusTemperature);
  }

  convertToFahrenheit() {
    this.isCelsius = false;
    const celsiusTemperature = (this.inputTemperature * 9) / 5 + 32;
    this.temperatureSubject$.next(celsiusTemperature);
  }
}
