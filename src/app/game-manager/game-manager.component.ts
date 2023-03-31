import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GameStatesComponent } from '../game-states/game-states.component';

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.css']
})
export class GameManagerComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;

  canvas!: HTMLCanvasElement;
  context!: CanvasRenderingContext2D;

  constructor(private gameStates:GameStatesComponent) { }

  ngOnInit(): void {
    console.log('GameManager Initialised');
  }

  ngAfterViewInit(): void {
    this.canvas = this.myCanvas.nativeElement;
    this.context = this.canvas.getContext('2d')!;
    this.gameStates.clearCanvas(this.canvas, this.context)
  }

}
