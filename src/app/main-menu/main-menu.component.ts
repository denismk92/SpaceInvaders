import { Component, ViewChild } from '@angular/core';
import { GameStatesComponent } from '../game-states/game-states.component';
import { CanvasComponent } from '../canvas/canvas.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent extends GameStatesComponent {

  @ViewChild(CanvasComponent, { static: false })
  canvasComponent!: CanvasComponent;

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    this.onStateEnter('MainMenu');
    this.drawPlayButton();
  }

  private drawPlayButton() {
    const canvasElement: HTMLCanvasElement = this.canvasComponent.canvasRef.nativeElement;
    const context: CanvasRenderingContext2D = canvasElement.getContext('2d')!;
    
    context.fillStyle = '#ffffff';
    context.fillRect(50, 50, 100, 50);

    context.fillStyle = '#000000';
    context.font = 'bold 20px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('Play', 100, 75);
  }
}
