import { Component, Input, OnInit } from '@angular/core';
import { BattingThrowingSidesEntity } from 'src/app/stats/models/batting-throwing-sides-entity';
import { StatsService } from 'src/app/stats/services/stats.service';
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
  lstBattingThrowingSides: BattingThrowingSidesEntity[] = [];
  @Input() MemberModel: MemberEntity = new MemberEntity();
  constructor(private memberService: MemberService, private statsService: StatsService) { }

  ngOnInit(): void {
    this.statsService.GetBattingThrowingSides().subscribe({
      next: (res) => {
        console.log('res',res);
        if (!res.error)
          this.lstBattingThrowingSides = res.model;
      },
      error: (err) => { console.log('error', err); },
      complete: () => { }

    });
  }
  onSubmitMemberModal(): void {
    console.log(this.MemberModel);
  }
  valorCambio(value: any) {
    console.log("nuevo valor:" + value)
  }
}
