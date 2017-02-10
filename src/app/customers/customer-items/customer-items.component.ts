import { Customers } from '../models/customers';
import { CustomersService } from '../services/customers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-items',
  templateUrl: './customer-items.component.html',
  styleUrls: ['./customer-items.component.css']
})
export class CustomerItemsComponent implements OnInit {

  customers: Customers[] = [];
  imageSrc: String = '';

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  handleInputImage(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const reader = new FileReader();

    reader.onload = this._handleReaderLoader.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoader(e) {
    const reader = e.target;
    this.imageSrc = reader.result;
  }

  getAllCustomers() {
    this.customersService.getAllCustomers().subscribe(
      customers => this.customers = customers,
      err => console.log(err)
    );
  }

}
