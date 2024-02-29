import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService:DbzService ) {
    // dbzService.
  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacterByIdLand(id);
  } 

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacterLand(character);
  }

}