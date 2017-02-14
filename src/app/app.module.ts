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
import { CustomerItemsComponent } from './customers/customer-items/customer-items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';

import { Routing } from './app.routes';
import { UsersService } from './users/users.service';
import { CustomersService } from './customers/services/customers.service';
import { RegisterSalesComponent } from './sales/register-sales/register-sales.component';
import { ChangeKiComponent } from './change-ki/change-ki.component';
import { UpdateKyotenComponent } from './update-kyoten/update-kyoten.component';
import { SalesInfoComponent } from './sales/sales-info/sales-info.component';

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
