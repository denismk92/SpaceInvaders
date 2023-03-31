import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-states',
  templateUrl: './game-states.component.html',
  styleUrls: ['./game-states.component.css']
})
export class GameStatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  clearCanvas(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

}
