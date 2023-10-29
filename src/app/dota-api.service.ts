import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DotaApiService {
  private apiUrl = 'https://api.opendota.com/api';

  constructor(private http: HttpClient) {}

  getPlayerMatches(accountId: string): Observable<any> {
    const url = `${this.apiUrl}/players/${accountId}/matches`;
    return this.http.get(url);
  }

  getMatchDetails(matchId: string): Observable<any> {
    const url = `${this.apiUrl}/matches/${matchId}`;
    return this.http.get(url);
  }
}
