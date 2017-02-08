import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Customers } from '../models/customers';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomersService {

  // private instance variable to hold base url
  private customersUrl = '/api/customer-list';

  // Resolve HTTP using the constructor
  constructor(private http: Http) { }

  // Fetch all existing customer
  searchCustomers(): Observable<Customers[]> {
    return this.http.get(`${this.customersUrl}`)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().err || 'Server error'));
  };
}
