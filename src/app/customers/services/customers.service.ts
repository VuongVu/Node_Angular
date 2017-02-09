import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
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
  searchCustomers(data: any): Observable<Customers[]> {
    const params: URLSearchParams = new URLSearchParams();
    const options = new RequestOptions({ headers: new Headers({'Content-Type': 'application/json'}) });

    // console.log(data.kaisha + ' ' + data.busho + ' ' + data.namae + ' ' + 'Retrieved from component');

    params.set('kaisha', data.kaisha);
    params.set('busho', data.busho);
    params.set('namae', data.namae);
    options.search = params;

    return this.http.get(`${this.customersUrl}`, options)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err || 'Server error'));
  };
}
