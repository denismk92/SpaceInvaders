import { Component, OnInit } from '@angular/core';
import { GameManagerComponent } from './game-manager/game-manager.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SpaceInvaders';
  constructor(private gameManager: GameManagerComponent) {}

  ngOnInit(): void {
    this.gameManager.ngOnInit();
  }
}
