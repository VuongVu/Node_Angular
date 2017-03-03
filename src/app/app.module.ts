// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Declarations
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { CustomerItemsComponent } from './components/customers/customer-items/customer-items.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersComponent } from './components/users/users.component';
import { RegisterSalesComponent } from './components/sales/register-sales/register-sales.component';
import { ChangeKiComponent } from './components/change-ki/change-ki.component';
import { UpdateKyotenComponent } from './components/update-kyoten/update-kyoten.component';
import { SalesInfoComponent } from './components/sales/sales-info/sales-info.component';

import { Routing } from './app.routing';
import { UsersService } from './users.service';
import { CustomersService } from './components/customers/services/customers.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CustomerListComponent,
    PageNotFoundComponent,
    UsersComponent,
    CustomerItemsComponent,
    RegisterSalesComponent,
    ChangeKiComponent,
    UpdateKyotenComponent,
    SalesInfoComponent
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
