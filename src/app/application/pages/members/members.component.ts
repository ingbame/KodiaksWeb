import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../../models/member';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  modalReference?: NgbModalRef;
  closeResult = '';
  lstMembers: MemberEntity[] = [];
  actionStr: string = "";
  MemberModel: any = {};
  constructor(private modalService: NgbModal, private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberService.GetMember().subscribe({
      next: (res) => {
        console.log('next', res);
        res.forEach((item: any) => {
          this.lstMembers.push(item);
        });
      },
      error: (err) => { console.log('error', err); },
      complete: () => { }

    });

    // for (let index = 0; index < 15; index++) {
    //   this.lstMembers?.push({
    //     memberId: index + 1,
    //     userId: 1,
    //     roleId: 1,
    //     fullName: "Baruch Iván Medina Ramos",
    //     nickName: "Baruch",
    //     shirtNumber: 26,
    //     bTSideId: 1,
    //     bTSideDesc: "R/R",
    //     cellPhoneNumber: "8116836441",
    //     canEdit: false,
    //     isVerified: false,
    //     isActive: false
    //   });
    //}
  }
  OpenAddMemberModel(): void{
    this.actionStr = "Agregar";
  }
  onAddMember(): void {
    console.log("pendiente agregar");
  }
  onEditMember(member: MemberEntity): void {
    this.actionStr = "Editar";
    console.log('mienbo a editar', member)
    this.MemberModel = member;
    // let index = this.lstMembers.findIndex(f => f.memberId == member.memberId);
    // if (index != undefined)
    //   this.lstMembers.splice(index, 1);
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
