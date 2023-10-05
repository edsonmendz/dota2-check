import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DotaApiService {
  private apiUrl = 'https://api.opendota.com/api/players';

  constructor(private http: HttpClient) {}

  getPlayerMatches(accountId: string): Observable<any> {
    const url = `${this.apiUrl}/${accountId}/matches`;
    return this.http.get(url);
  }
}