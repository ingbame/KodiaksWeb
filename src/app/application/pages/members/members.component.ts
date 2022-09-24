import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { MemberEntity } from '../../models/member';

import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  actionStr: string = "";
  lstMembers: MemberEntity[] = [];
  MemberModel: MemberEntity = new MemberEntity();

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberService.GetMember().subscribe({
      next: (res) => {
        if (res.length > 0)
          this.lstMembers = res;
      },
      error: (err) => { console.log('error', err); },
      complete: () => { }

    });
  }
  OpenAddMemberModel(): void {
    this.actionStr = "Agregar";
    this.MemberModel = new MemberEntity();
  }
  onEditMember(member: MemberEntity): void {
    this.actionStr = "Editar";
    this.MemberModel = JSON.parse(JSON.stringify(member));
  }
}
