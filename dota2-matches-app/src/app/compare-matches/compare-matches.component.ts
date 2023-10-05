import { Component, OnInit } from '@angular/core';
import { DotaApiService } from '../dota-api.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-compare-matches',
  templateUrl: './compare-matches.component.html',
  styleUrls: ['./compare-matches.component.css'],
})
export class CompareMatchesComponent implements OnInit {
  accountId1: string = '131018831';
  accountId2: string = '182377283';
  matches1: any[] = [];
  matches2: any[] = [];
  commonMatches: any[] = [];

  constructor(private dotaApiService: DotaApiService) {}

  ngOnInit(): void {}

  comparePlayers(): void {
    if (this.accountId1 && this.accountId2) {
      this.dotaApiService.getPlayerMatches(this.accountId1).subscribe((data1: any) => {
        this.matches1 = data1;
        this.dotaApiService.getPlayerMatches(this.accountId2).subscribe((data2: any) => {
          this.matches2 = data2;
          this.findCommonMatches();
        });
      });
    }
  }

  findCommonMatches(): void {
    this.commonMatches = this.matches1.filter((match1) =>
      this.matches2.some((match2) => match2.match_id === match1.match_id)
    );
  }
}
