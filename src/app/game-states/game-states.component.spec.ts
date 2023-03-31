import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStatesComponent } from './game-states.component';

describe('GameStatesComponent', () => {
  let component: GameStatesComponent;
  let fixture: ComponentFixture<GameStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameStatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
