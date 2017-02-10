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

  handleInputImage(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const reader = new FileReader();

    reader.onload = this._handleReaderLoader.bind(this);
    reader.readAsDataURL(file);
    this.imageUrl = e.target.files[0].mozFullPath;
  }

  _handleReaderLoader(e) {
    const reader = e.target;
    this.imageSrc = reader.result;
  }

}
