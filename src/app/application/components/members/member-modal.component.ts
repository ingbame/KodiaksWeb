import { Component, Input, OnInit } from '@angular/core';
import { MemberActionEnum } from 'src/app/shared/enums/member-action-enum';
import { NotificationEnum } from 'src/app/shared/enums/notification-enum';
import { NotificationUtility } from 'src/app/shared/utilities/notification';
import { BattingThrowingSidesEntity } from 'src/app/stats/models/batting-throwing-sides-entity';
import { StatsService } from 'src/app/stats/services/stats.service';
import { MemberEntity } from '../../models/member';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.scss']
})
export class MemberModalComponent implements OnInit {
  @Input() actionStr?: MemberActionEnum;
  // makes the OrderStatus enum available in the template
  MemberActionEnum = MemberActionEnum;
  lstBattingThrowingSides: BattingThrowingSidesEntity[] = [];
  @Input() MemberModel: MemberEntity = new MemberEntity();
  constructor(private memberService: MemberService, private statsService: StatsService, private notification: NotificationUtility) { }

  ngOnInit(): void {
    this.statsService.GetBattingThrowingSides().subscribe({
      next: (res) => {
        if (!res.error)
          this.lstBattingThrowingSides = res.model;
      },
      error: (err) => { this.notification.show(NotificationEnum.error, "Error", err); },
      complete: () => { }
    });
  }
  onSubmitMemberModal(): void {
    console.log('FormModel',this.MemberModel);
    switch (this.actionStr) {
      case MemberActionEnum.add:
        let model: any = this.CreateModel();
        if(this.ModelValid(model)){
          this.notification.show(NotificationEnum.success, this.actionStr ?? "", "Mensaje full");
        }
        console.log("modelo",model)
        break;
      case MemberActionEnum.edit:

        this.notification.show(NotificationEnum.success, this.actionStr ?? "", "Mensaje full2");
        break;

      default:
        break;
    }
  }
  private CreateModel():any{
    let result: any = {
      member: {
        fullName: this.MemberModel.fullName?.trim() ?? null,
        nickName: this.MemberModel.nickName?.trim() ?? null,
        shirtNumber: this.MemberModel.shirtNumber ?? null,
        btsideId: this.MemberModel.btSideId ?? null,
        photoUrl: this.MemberModel.photoUrl?.trim() ?? null,
        birthday: this.MemberModel.birthday ?? null,
        email: this.MemberModel.email?.trim() ?? null,
        cellPhoneNumber: this.MemberModel.cellPhoneNumber?.trim() ?? null
      },
      user: {
        userName: this.MemberModel.cellPhoneNumber?.trim() ?? null,
        password: "Kodiaks" + this.MemberModel.cellPhoneNumber?.trim()?.substring(this.MemberModel.cellPhoneNumber.length - 4) ?? null
      }
    };
    return result;
  }
  private ModelValid(model:any):boolean{
    let title: string = "Información incorrecta"
    if(model.member.fullName == null || model.member.fullName == ""){
      this.notification.show(NotificationEnum.error, title, "No contiene nombre completo");
      return false;
    }
    if(model.member.nickName == null || model.member.nickName == ""){
      this.notification.show(NotificationEnum.error, title, "No contiene apodo");
      return false;
    }
    if(model.member.shirtNumber == null){
      this.notification.show(NotificationEnum.error, title, "No contiene numero de playera");
      return false;
    }
    if(model.member.cellPhoneNumber == null || model.member.cellPhoneNumber == ""){
      this.notification.show(NotificationEnum.error, title, "No contiene número de celular");
      return false;
    }
    return true;
  }
}
