import { Component, OnInit, Inject } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customers } from '../models/customers';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  // Instantiate customers to an empty array
  customers: Customers[];
  // Create instance of FormGroup
  customerForm: FormGroup;

  constructor(private customersService: CustomersService, private fb: FormBuilder) {
    // Using the FormBuilder to build out our form.
    this.customerForm = fb.group({
      kaisha: ['', Validators.maxLength(30)],
      busho: ['', Validators.maxLength(30)],
      namae: ['', Validators.maxLength(30)]
    });
  }

  ngOnInit() {

  }

  searchCustomers(value: any) {
    const data = {
      'kaisha': value.kaisha,
      'busho': value.busho,
      'namae': value.namae
    };

    console.log(data.kaisha + ' ' + data.busho + ' ' + data.namae);

    // this.customersService.searchCustomers().subscribe(
    //   customers => this.customers = customers,
    //   err => console.error(err)
    // );
  }

}
