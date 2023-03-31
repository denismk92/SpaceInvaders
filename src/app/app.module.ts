import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameManagerComponent } from './game-manager/game-manager.component';
import { GameStatesComponent } from './game-states/game-states.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GameManagerComponent,
    GameStatesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameManagerComponent, GameStatesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
