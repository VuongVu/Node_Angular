import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'app/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  // Instantiate customers to an empty array
  customers: any = [];

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customersService.getAllCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

}
