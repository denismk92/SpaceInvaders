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
  @ViewChild(CanvasComponent, {static: true}) canvasElement!: CanvasComponent;

  playButtonCallback = () => {}
  canvasWidth = 800;
  canvasHeight = 600;
  buttonWidth = 100;
  buttonHeight = 40;
  canvas!: HTMLCanvasElement;
  context!: CanvasRenderingContext2D;
  buttonX = (this.canvasWidth - this.buttonWidth) / 2;
  buttonY = (this.canvasHeight - this.buttonHeight) / 2;
  playButtonEventListener: (el: any) => void;

  constructor(private mainMenu: MainMenuComponent) {
    super();
    this.playButtonEventListener = (el) => {
      if (
        el.offsetX >= this.buttonX &&
        el.offsetX <= this.buttonX + this.buttonWidth &&
        el.offsetY >= this.buttonY &&
        el.offsetY <= this.buttonY + this.buttonHeight
      ) {
        console.log('Play button clicked');
        this.playButtonCallback();
      }
    };
  }

  ngOnInit(): void {
    // this.onStateEnter();
    console.log('GameManager Initialised');
  }

  ngAfterViewInit(): void {
    this.canvas = this.canvasElement.canvasRef.nativeElement;
    this.context = this.canvas.getContext('2d')!;
    this.clearCanvas(this.canvas, this.context);
    this.drawPlayButton();
    this.canvas.addEventListener('click', this.playButtonEventListener);
  }

  drawPlayButton() {
    const canvasCenterX = this.canvasWidth / 2;
    const canvasCenterY = this.canvasHeight / 2;

    const buttonWidth = 100;
    const buttonHeight = 50;
    const buttonX = canvasCenterX - buttonWidth / 2;
    const buttonY = canvasCenterY - buttonHeight / 2;

    this.context.fillStyle = '#ffffff';
    this.context.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);

    this.context.fillStyle = '#000000';
    this.context.font = 'bold 20px sans-serif';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillText('Play', canvasCenterX, canvasCenterY);
  }

  onPlayButtonClick(callback: any) {
    this.playButtonCallback = callback;
  }

}
