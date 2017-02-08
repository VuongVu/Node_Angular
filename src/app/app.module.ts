// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Declarations
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';

import { Routing } from './app.routes';
import { UsersService } from './users.service';
import { CustomersService } from './customers/services/customers.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CustomerListComponent,
    PageNotFoundComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    Routing
  ],
  providers: [
    UsersService,
    CustomersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
