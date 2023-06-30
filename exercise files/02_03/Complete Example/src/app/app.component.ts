import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const SNOWMAN_IMAGE = '..\\assets\\icons\\snowman image.jpg';
const SUN_IMAGE = '..\\assets\\icons\\sun.jpg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  temperatureSubject$ = new BehaviorSubject<number>(72);
  inputTemperature = 0;
  imageSrc = SUN_IMAGE;

  ngOnInit() {
    this.temperatureSubject$.subscribe((temperature) => {
      if (temperature >= 40) {
        this.imageSrc = SUN_IMAGE;
      } else {
        this.imageSrc = SNOWMAN_IMAGE;
      }
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
}
