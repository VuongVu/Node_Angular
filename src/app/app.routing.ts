import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { UsersComponent } from './components/users/users.component';
import { ChangeKiComponent } from './components/change-ki/change-ki.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterSalesComponent } from './components/sales/register-sales/register-sales.component';
import { CustomerItemsComponent } from './components/customers/customer-items/customer-items.component';
import { UpdateKyotenComponent } from './components/update-kyoten/update-kyoten.component';
import { SalesInfoComponent } from './components/sales/sales-info/sales-info.component';

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
    path: 'change-ki',
    component: ChangeKiComponent
  },
  {
    path: 'update-kyoten',
    component: UpdateKyotenComponent
  },
  {
    path: 'sales-info',
    component: SalesInfoComponent
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
