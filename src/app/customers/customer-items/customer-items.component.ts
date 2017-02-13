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

  handleInputImage(event) {
    const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  getAllCustomers() {
    this.customersService.getAllCustomers().subscribe(
      customers => this.customers = customers,
      err => console.log(err)
    );
  }

}
