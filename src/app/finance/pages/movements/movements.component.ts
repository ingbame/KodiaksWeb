import { Component, OnInit } from '@angular/core';
import { MovementEntity } from '../../models/movement';
import { MovementService } from '../../services/movement.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {
  declare bootstrap?: any;
  total: number = 0.00;
  movement: MovementEntity = new MovementEntity();
  movements: MovementEntity[] = [];

  constructor(private movementServices: MovementService) { }

  ngOnInit(): void {
    this.movementServices.GetTotal().subscribe({
      next: (res) => {
          this.total = res;
      },
      error: (err) => { console.log('error', err); },
      complete: () => { }

    });
    this.movementServices.Get().subscribe({
      next: (res) => {
        if (res.length > 0)
          this.movements = res;
      },
      error: (err) => { console.log('error', err); },
      complete: () => { }

    });
  }
  OpenAddMovementModel(): void {
    this.movement = new MovementEntity();
  }
  onOpenDetailMovement(movement: any): void {
    this.movement = movement;
  }
}
