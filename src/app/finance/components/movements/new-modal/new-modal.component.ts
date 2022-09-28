import { Component, Input, OnInit } from '@angular/core';
import { MemberEntity } from 'src/app/application/models/member';
import { MemberService } from 'src/app/application/services/member.service';
import { ConceptEntity } from 'src/app/finance/models/concept';
import { MethodEntity } from 'src/app/finance/models/method';
import { MovementEntity } from 'src/app/finance/models/movement';
import { MovementTypeEntity } from 'src/app/finance/models/movement-type';
import { ConceptService } from 'src/app/finance/services/concept.service';
import { MethodService } from 'src/app/finance/services/method.service';
import { MovementService } from 'src/app/finance/services/movement.service';
import { MovementsTypeService } from 'src/app/finance/services/movements-type.service';
import { NotificationEnum } from 'src/app/shared/enums/notification-enum';
import { NotificationUtility } from 'src/app/shared/utilities/notification';

@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.scss']
})
export class NewModalComponent implements OnInit {
  movementTypes: MovementTypeEntity[] = [];
  concepts: ConceptEntity[] = [];
  methods: MethodEntity[] = [];
  members: MemberEntity[] = [];

  @Input() movement: MovementEntity = new MovementEntity();

  constructor(
    private movementsTypeService: MovementsTypeService,
    private conceptService: ConceptService,
    private methodService: MethodService,
    private memberService: MemberService,
    private movementService: MovementService,
    private notification: NotificationUtility) { }

  ngOnInit(): void {
    this.getMovementTypes();
    this.getConcepts();
    this.getMethods();
    this.getMembers();
  }
  onSubmitMovementModal(): void {
    let model: any = {};
    // myModal?.modal('hide');
    model = this.NewMovementModel();
    console.log('model', model);
    if (this.ModelValid(model)) {
      this.movementService.post(model).subscribe({
        next: (res) => {
          this.notification.show(NotificationEnum.success, "Acción", "Guardado correctamente.");
          this.movement = new MovementEntity();
        },
        error: (err) => {
          this.notification.show(NotificationEnum.error, "Error", err.error);
        },
        complete: () => {
          let btnModalClose = document.getElementById("movementModalClose");
          btnModalClose?.click();
        }
      });
    }


  }
  onDdlMemberChange(event: any): void {
    this.movement.memberId = event.target.selectedOptions[0].dataset.id;
  }
  onDdlMovementTypeChange(event: any): void {
    this.movement.movementTypeId = event.target.selectedOptions[0].dataset.id;
  }
  onDdlConceptChange(event: any): void {
    this.movement.conceptId = event.target.selectedOptions[0].dataset.id;
  }
  onDdlMethodChange(event: any): void {
    this.movement.methodId = event.target.selectedOptions[0].dataset.id;
  }
  onMovementDateChange(event: any): void {
    this.movement.movementDate = new Date(event.target.valueAsNumber)
  }
  private getMovementTypes(): void {
    this.movementsTypeService.Get().subscribe({
      next: (res) => {
        this.movementTypes = res;
      },
      error: (err) => { this.notification.show(NotificationEnum.error, "Error", err); },
      complete: () => { }
    });

  }
  private getConcepts(): void {
    this.conceptService.Get().subscribe({
      next: (res) => {
        this.concepts = res;
      },
      error: (err) => { this.notification.show(NotificationEnum.error, "Error", err); },
      complete: () => { }
    });
  }
  private getMethods(): void {
    this.methodService.Get().subscribe({
      next: (res) => {
        this.methods = res;
      },
      error: (err) => { this.notification.show(NotificationEnum.error, "Error", err); },
      complete: () => { }
    });
  }
  private getMembers(): void {
    this.memberService.GetMember().subscribe({
      next: (res) => {
        if (!res.error)
          this.members = res;
      },
      error: (err) => { this.notification.show(NotificationEnum.error, "Error", err); },
      complete: () => { }
    });
  }
  private NewMovementModel(): any {
    let model = {
      movementId: this.movement.movementId ?? null,
      memberId: this.movement.memberId ?? null,
      movementTypeId: this.movement.movementTypeId ?? null,
      conceptId: this.movement.conceptId ?? null,
      methodId: this.movement.methodId ?? null,
      movementDate: this.movement.movementDate ?? null,
      amount: this.movement.amount ?? null,
      additionalComment: this.movement.additionalComment?.trim() ?? null,
      evidenceUrl: this.movement.evidenceUrl?.trim() ?? null,
    }
    return model;
  }
  private ModelValid(model: any): boolean {
    let title: string = "Información incorrecta"
    if (model.memberId == null || Number(model.memberId) <= 0) {
      this.notification.show(NotificationEnum.error, title, "No seleccionó un integrante");
      return false;
    }
    if (model.movementTypeId == null || Number(model.movementTypeId) <= 0) {
      this.notification.show(NotificationEnum.error, title, "No seleccionó tipo de movimiento");
      return false;
    }
    if (model.conceptId == null || Number(model.conceptId) <= 0) {
      this.notification.show(NotificationEnum.error, title, "No seleccionó concepto");
      return false;
    }
    if (model.methodId == null || Number(model.methodId) <= 0) {
      this.notification.show(NotificationEnum.error, title, "No seleccionó método de pago");
      return false;
    }
    if (model.movementDate == null) {
      this.notification.show(NotificationEnum.error, title, "La fecha está vacía");
      return false;
    }
    console.log('movementDate', model.movementDate);
    console.log('now', Date.now());

    if (model.movementDate > Date.now()) {
      this.notification.show(NotificationEnum.error, title, "La fecha es mayor a la actual.");
      return false;
    }
    if (model.amount == null || Number(model.amount) <= 0) {
      this.notification.show(NotificationEnum.error, title, "No contiene monto a guardar");
      return false;
    }
    return true;
  }
}
