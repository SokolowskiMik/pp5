import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';
import { CustomerListElementComponent } from './components/customer-list-element/customer-list-element.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';



@NgModule({
  declarations: [
    CustomerFormComponent, CustomerListComponent, CustomerListElementComponent
  ],
  exports: [
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    CustomerService
  ]
})
export class InvoiceModule { }
