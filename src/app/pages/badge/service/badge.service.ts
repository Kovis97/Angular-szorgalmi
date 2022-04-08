import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Badge } from '../classes/badge';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
	
    constructor(private httpClient: HttpClient ) {
    }
    
    getBadge(badgeId:number): Observable<Badge> {
      return this.httpClient.get<Badge>(environment.apiUrl + '/badges/' + badgeId);
    }

    getBadges(): Observable<Badge[]> {
      return this.httpClient.get<Badge[]>(environment.apiUrl + '/badges');
    }

    createBadge(badge: Badge): Observable<any> {
      return this.httpClient.post(environment.apiUrl + '/badges', badge);
    }

    removeBadge(badgeId: number): Observable<any> {
      return this.httpClient.delete(environment.apiUrl + '/badges/' + badgeId);
    }

    editBadge(badge: Badge, badgeId: number): Observable<any> {
      return this.httpClient.put(environment.apiUrl + '/badges/' + badgeId,badge);
    }
}
