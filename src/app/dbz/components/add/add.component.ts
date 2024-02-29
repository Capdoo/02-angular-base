import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {

    // debugger;

    console.log(this.character);

    if (this.character.name.length === 0) {
      return;
    }

    const newCharacter = { name: this.character.name, power: this.character.power };
    this.onNewCharacter.emit(newCharacter);

    this.character.name = '';
    this.character.power = 0;

    this.character = { name: "", power:0 }


  }
}
