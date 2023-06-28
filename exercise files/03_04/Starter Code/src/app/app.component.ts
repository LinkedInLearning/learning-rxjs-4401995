import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  temperatureSubject$ = new Observable<number>();
  temperatureDataList: number[] = [];
  temperatureInputList: number[] = [];
  inputTemperature = 0;

  setTemperature() {
    const temperature = this.inputTemperature;
    this.temperatureInputList.push(temperature);
  }

  displayValues() {}

  setInputTemperature(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.inputTemperature = parseInt(input);
  }
}
