import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomersService {

  constructor(private http: Http) { }

  // Get all customer from the API
  getAllCustomers() {
    return this.http.get('/api/customer-list').map(res => res.json());
  };
}
