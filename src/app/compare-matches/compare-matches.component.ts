import { Component, OnInit } from '@angular/core';
import { DotaApiService } from '../dota-api.service';


@Component({
  selector: 'app-compare-matches',
  templateUrl: './compare-matches.component.html',
  styleUrls: ['./compare-matches.component.css'],
})
export class CompareMatchesComponent implements OnInit {
  busca: number = 0
  accountId1: string = '131018831';
  accountId2: string = '20364569';
  matches1: any[] = [];
  matches2: any[] = [];
  commonMatches: any[] = [];
  commonMatchDetails: any[] = [];
  partidasFiltradas: any[] = [];

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
    this.busca = 1
  }

  findCommonMatches(): void {
    this.commonMatches = this.matches1.filter((match1) =>
      this.matches2.some((match2) => match2.match_id === match1.match_id)
    );
    // Após encontrar as partidas em comum, obter os detalhes de cada partida.
    this.getMatchDetailsForCommonMatches();
  }

  getMatchDetailsForCommonMatches(): void {
    this.commonMatchDetails = []; // Limpar os detalhes anteriores

    this.commonMatches.forEach((match) => {
      this.dotaApiService.getMatchDetails(match.match_id).subscribe((matchDetails: any) => {
        this.commonMatchDetails.push(matchDetails); // Adicionar detalhes à matriz
      });
    });
    
    setTimeout(()=> {
      this.filterOppositeTeamMatches();
    }, 3000)

    console.log(this.partidasFiltradas)
    this.busca = 2
  }

  
  filterOppositeTeamMatches(): void {
    
    for (const match of this.commonMatchDetails) {
      let player1Team = null;
      let player2Team = null;
      for (const player of match.players) {
        
        if (player.account_id == this.accountId1) {
          player1Team = player.player_slot;
        } else if (player.account_id == this.accountId2) {
          player2Team = player.player_slot;
        }
      }

      if (player1Team && player2Team) {        
        if ((player1Team < 128 && player2Team >= 128) || (player1Team >= 128 && player2Team < 128)) {          
          this.partidasFiltradas.push(match);
        }
      }
    }
  }

  trocar1(m:any): void {
    this.accountId1 = m
  }

  trocar2(m:any): void {
    this.accountId2 = m
  }
}
