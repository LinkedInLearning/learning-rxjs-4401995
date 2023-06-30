import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  inputTemperature = 0;
  displayTemperatureText = '';
  isCelsius = false;
  isTouched = false;

  ngOnInit() {

  }

  setTemperature() {
    const temperature = this.inputTemperature;
  }

  setInputTemperature(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.inputTemperature = parseInt(input);
  }

  convertToCelsius() {
    this.isCelsius = true;
    const celsiusTemperature = ((this.inputTemperature - 32) * 5) / 9;
  }

  convertToFahrenheit() {
    this.isCelsius = false;
    const celsiusTemperature = (this.inputTemperature * 9) / 5 + 32;
  }
}
