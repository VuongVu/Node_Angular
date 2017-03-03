import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-sales',
  templateUrl: './register-sales.component.html',
  styleUrls: ['./register-sales.component.css']
})
export class RegisterSalesComponent implements OnInit {

  imageSrc: String = '';
  imageUrl: String = '';

  constructor() { }

  ngOnInit() {
  }

  handleInputImage(event) {
    const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
        this.imageUrl = file.name;
      };

      reader.readAsDataURL(file);
    }
  }

}
