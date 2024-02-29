import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public names: string[] = ['ironman', 'spiderman'];
  public name: string = this.names[0];
  public ages: number[] = [45, 90];
  public age: number = this.ages[0];

  public flagName: boolean = true;
  public flagAge: boolean = true;

  //Como una propiedad
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {

    if (this.flagName) {
      this.name = this.names[1];
    } else {
      this.name = this.names[0];
    }
    this.flagName = !this.flagName;
  }

  changeAge(): void {
    if (this.flagAge) {
      this.age = this.ages[1];
    } else {
      this.age = this.ages[0];
    }
    this.flagAge = !this.flagAge;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
