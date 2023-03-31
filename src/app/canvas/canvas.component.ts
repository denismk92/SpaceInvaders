import { Component, Input, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-canvas',
  template: '<canvas #canvas></canvas>',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  @Input() width = 800;
  @Input() height = 600;

  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const canvasElement: HTMLCanvasElement = this.canvasRef.nativeElement;
    canvasElement.width = this.width;
    canvasElement.height = this.height;
  }
}
