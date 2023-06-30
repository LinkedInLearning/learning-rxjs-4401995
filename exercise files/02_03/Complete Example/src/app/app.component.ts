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
  inputTemperature = 0;
  imageSrc = SUN_IMAGE;
  temperatureSubject$ = new BehaviorSubject<number>(72);

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
    this.temperatureSubject$.next(this.inputTemperature);
  }

  setInputTemperature(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.inputTemperature = parseInt(input);
  }
}
