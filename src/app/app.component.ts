import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;
  public i: number = 0;

  increaseBy(factor: number): void {
    this.counter += factor;
  }

  reset() {
    this.counter = 10;
  }

}
