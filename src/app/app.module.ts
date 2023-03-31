import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameManagerComponent } from './game-manager/game-manager.component';
import { GameStatesComponent } from './game-states/game-states.component';
import { CanvasComponent } from './canvas/canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GameManagerComponent,
    GameStatesComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameManagerComponent, GameStatesComponent, CanvasComponent, MainMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
