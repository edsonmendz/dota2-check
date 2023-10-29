import { Component, OnInit } from '@angular/core';
import { DotaApiService } from '../dota-api.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css'],
})
export class MatchListComponent implements OnInit {
  accountId: string = '131018831';
  accountId2: string = '182377283'; // Substitua pelo ID do jogador desejado
  matches: any[] = [];

  constructor(private dotaApiService: DotaApiService) {}

  ngOnInit(): void {
    this.dotaApiService.getPlayerMatches(this.accountId).subscribe((data: any) => {
      this.matches = data;
    });
  }
}