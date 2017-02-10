import { RegisterSalesComponent } from './register-sales/register-sales.component';
import { CustomerItemsComponent } from './customers/customer-items/customer-items.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Route Configuration
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'customer-list',
    component: CustomerListComponent
  },
  {
    path: 'customer-items',
    component: CustomerItemsComponent
  },
  {
    path: 'register-sales',
    component: RegisterSalesComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
