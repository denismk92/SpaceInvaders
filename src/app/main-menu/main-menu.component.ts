import { Component } from '@angular/core';
import { GameStatesComponent } from '../game-states/game-states.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent extends GameStatesComponent{

  constructor() {
    super()
   }

  onStateExit(){

  }
  onStateEnter(){}
}
