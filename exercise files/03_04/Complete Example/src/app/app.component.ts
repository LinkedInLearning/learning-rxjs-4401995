import { Component, OnInit } from '@angular/core';
import { last, from, Observable } from 'rxjs';

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

  displayValues() {
    this.temperatureSubject$ = from(this.temperatureInputList);
    this.temperatureSubject$.pipe(last()).subscribe((temperature) => {
      this.temperatureDataList.push(temperature);
    });
  }

  setInputTemperature(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.inputTemperature = parseInt(input);
  }
}
