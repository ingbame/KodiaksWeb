import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../../models/member';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  modalReference?: NgbModalRef;
  closeResult = '';
  lstMembers: MemberEntity[] = [];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    for (let index = 0; index < 15; index++) {
      this.lstMembers?.push({
        memberId: index + 1,
        userId: 1,
        roleId: 1,
        fullName: "Baruch Iván Medina Ramos",
        nickName: "Baruch",
        shirtNumber: 26,
        btSideId: 1,
        btSideDesc: "R/R",
        cellPhoneNumber: "8116836441",
        canEdit: false,
        isVerified: false,
        isActive: false
      });

    }
  }
  OpenAddMemberModel(content: any): void{
    this.modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.modalReference.result.then((result) => {
      console.log('modal reason', result);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log('modal reason', reason);
      console.log('modal reason2', this.getDismissReason(reason));
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  onAddMember(): void {
    console.log("pendiente agregar");
  }
  onEditMember(member: MemberEntity): void {
    let index = this.lstMembers.findIndex(f => f.memberId == member.memberId);
    if (index != undefined)
      this.lstMembers.splice(index, 1);
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
