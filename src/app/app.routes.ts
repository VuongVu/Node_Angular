import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { UsersComponent } from './users/users.component';
import { ChangeKiComponent } from './change-ki/change-ki.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterSalesComponent } from './sales/register-sales/register-sales.component';
import { CustomerItemsComponent } from './customers/customer-items/customer-items.component';
import { UpdateKyotenComponent } from './update-kyoten/update-kyoten.component';
import { SalesInfoComponent } from './sales/sales-info/sales-info.component';

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
