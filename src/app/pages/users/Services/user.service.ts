import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	
	constructor(private httpClient: HttpClient ) {
		
	}

	getUser(userID: number): Observable<User> {
		return this.httpClient.get<User>(environment.apiUrl + '/users/' + userID);
	}
	
	getUsers():  Observable<any> {
		return this.httpClient.get(environment.apiUrl + '/users'); 
	}

	createUser(user: User): Observable<any> {
		return this.httpClient.post(environment.apiUrl + '/users', user);
	}
	
	removeUser(userId: number):  Observable<any> {
		return this.httpClient.delete(environment.apiUrl + '/users/' + userId); 
	}

	editUser(user: User, userId: number): Observable<any> {
		return this.httpClient.patch(environment.apiUrl + '/users/' + userId,user);
	}

}
