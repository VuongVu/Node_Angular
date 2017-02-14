import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  // Get all users from the API
  getAllUsers() {
    return this.http.get('/api/users').map(res => res.json());
  }
}
