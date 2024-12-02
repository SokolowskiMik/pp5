import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceModule } from './invoice.module';


const routes: Routes = [
  {
    path: 'customer-form',
    component: CustomerFormComponent
  },
  {
    path: 'customer-list',
    component: CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }