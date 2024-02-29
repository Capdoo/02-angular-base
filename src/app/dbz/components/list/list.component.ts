import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output()
  public onSendDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterListLand: Character[] = [
    {name: 'Trunks', power: 1},
    {name: 'Algo', power: 11}
  ]

  deleteCharacter(id?: string): void{

    if (!id) return;

    this.onSendDelete.emit(id);
  }


}
