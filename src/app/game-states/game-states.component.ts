import { Component } from '@angular/core';

@Component({
  selector: 'app-game-states',
  templateUrl: './game-states.component.html',
  styleUrls: ['./game-states.component.css']
})
export class GameStatesComponent {

  protected onStateEnter(stateName: string) {
    console.log(`Entered state: ${stateName}`);
  }

  clearCanvas(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

}
