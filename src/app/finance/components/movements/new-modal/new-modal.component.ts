import { Component, Input, OnInit } from '@angular/core';
import { MemberEntity } from 'src/app/application/models/member';
import { MemberService } from 'src/app/application/services/member.service';
import { ConceptEntity } from 'src/app/finance/models/concept';
import { MethodEntity } from 'src/app/finance/models/method';
import { MovementEntity } from 'src/app/finance/models/movement';
import { MovementTypeEntity } from 'src/app/finance/models/movement-type';
import { ConceptService } from 'src/app/finance/services/concept.service';
import { MethodService } from 'src/app/finance/services/method.service';
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
    private notification: NotificationUtility) { }

  ngOnInit(): void {
    this.getMovementTypes();
    this.getConcepts();
    this.getMethods();
    this.getMembers();
  }
  onSubmitMovementModal(): void {
    let btnModalClose = document.getElementById("movementModalClose");
    btnModalClose?.click();
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
    this.movement.movementDate = new Date(event.target.value)
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
}
