import { Component, ViewChild } from '@angular/core';
import { GameStatesComponent } from '../game-states/game-states.component';
import { CanvasComponent } from '../canvas/canvas.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.css'],
  providers: [MainMenuComponent]
})
export class GameManagerComponent extends GameStatesComponent {

  canvasWidth = 800;
  canvasHeight = 600;

  @ViewChild(CanvasComponent, {static: true}) canvasComponent!: CanvasComponent;

  constructor(
    private mainMenu: MainMenuComponent
  ) {
    super();
  }

  ngOnInit(): void {
    this.onStateEnter('MainMenu');
    console.log('GameManager Initialised');
  }

  ngAfterViewInit(): void {
    const canvasElement: HTMLCanvasElement = this.canvasComponent.canvasRef.nativeElement;
    const context: CanvasRenderingContext2D = canvasElement.getContext('2d')!;
    this.clearCanvas(canvasElement, context);
    this.drawPlayButton();
  }

  private drawPlayButton() {
    const canvasElement: HTMLCanvasElement = this.canvasComponent.canvasRef.nativeElement;
    const context: CanvasRenderingContext2D = canvasElement.getContext('2d')!;
  
    const canvasCenterX = canvasElement.width / 2;
    const canvasCenterY = canvasElement.height / 2;
  
    const buttonWidth = 100;
    const buttonHeight = 50;
    const buttonX = canvasCenterX - buttonWidth / 2;
    const buttonY = canvasCenterY - buttonHeight / 2;
  
    context.fillStyle = '#ffffff';
    context.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
  
    context.fillStyle = '#000000';
    context.font = 'bold 20px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('Play', canvasCenterX, canvasCenterY);
  }
  
}
