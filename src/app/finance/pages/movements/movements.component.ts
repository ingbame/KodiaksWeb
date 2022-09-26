import { Component, OnInit } from '@angular/core';
import { MovementEntity } from '../../models/movement';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {
  total: number = 0.00;
  movements: MovementEntity[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  OpenAddMovementModel(): void {

  }
  onOpenDetailMovement(movement: any): void {

  }
}
