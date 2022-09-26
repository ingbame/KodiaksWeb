import { Component, OnInit } from '@angular/core';
import { MovementEntity } from '../../models/movement';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {
  total: number = 0.00;
  movement: MovementEntity = new MovementEntity();
  movements: MovementEntity[] = [];

  constructor() { }

  ngOnInit(): void {
    this.movements.push({
      movementDate: new Date(),
      movementTypeKey: "Gto",
      conceptDesc: "Ampayeo",
      amount: 50.00
    });
  }
  OpenAddMovementModel(): void {

  }
  onOpenDetailMovement(movement: any): void {
    this.movement = movement;
  }
}
