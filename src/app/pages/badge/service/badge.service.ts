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

    getBadges(): Observable<Badge[]> {
      return this.httpClient.get<Badge[]>(environment.apiUrl + '/badges');
    }
}
