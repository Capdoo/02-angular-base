import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

console.log(uuid());

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: 'Krilin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9000 },
    { id: uuid(), name: 'Rafa', power: 55555 }
  ];

  constructor() { }

  addCharacterLand(character: Character): void {
    console.log("Service DBZ Component")
    console.log(character);

    // const newCharacter = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    const newCharacter = { id:uuid(), ...character };
    this.characters.push(newCharacter);
    console.log(this.characters);
  }

  onDeleteCharacterLand(idx: number): void{
    console.log("Eliminando en main");
    console.log(event);
    console.log(idx);
    console.log( this.characters.splice(idx, 1));
    // this.characters.pop();
  }

  onDeleteCharacterByIdLand(idx: string): void{
    this.characters = this.characters.filter ( e => e.id !== idx);
  }

}
