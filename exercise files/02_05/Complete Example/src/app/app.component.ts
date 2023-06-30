import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  temperatureDataList: number[] = [];
  inputTemperature = 0;
  displayTemperatureText = '';
  isCelsius = false;

  ngOnInit() {}

  setTemperature() {
    const temperature = this.inputTemperature;
  }

  setInputTemperature(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.inputTemperature = parseInt(input);
  }

  addSubscription() {
    this.temperatureDataList = [];
  }
  
  removeSubscription() {
    this.temperatureDataList = [];
  }
}
