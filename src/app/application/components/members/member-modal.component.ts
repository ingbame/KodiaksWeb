import { Component, Input, OnInit } from '@angular/core';
import { AddMemberEntity } from '../../models/add-member';
import { MemberEntity } from '../../models/member';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.scss']
})
export class MemberModalComponent implements OnInit {
  @Input() actionStr: string = '';
  @Input() MemberModel = new MemberEntity();
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {

  }
  onSubmitMemberModal(): void {
    console.log(this.MemberModel);
  }
}
