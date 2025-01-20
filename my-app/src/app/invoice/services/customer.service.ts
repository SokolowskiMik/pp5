import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable()
export class CustomerService {

  private baseUrl: string = environment.apiUrl + '/customer/'

  private customersList: Customer[] = [];
  
  constructor(
    private httpClient: HttpClient
  ) {}



  addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseUrl, customer);
    // this.customersList.push(customer);
    // console.log('zawartość Service:', this.customersList);
    // return this.customersList
  }

  getCustomers() : Observable<Customer[]> {
    // return this.customersList;
    return this.httpClient.get<Customer[]>(this.baseUrl)
    .pipe(
      map((customers: Customer[]) =>
        customers.map((customer) => new Customer().deserialize(customer))
      )
    )
  }

  removeCustomer(customer: Customer): Observable<Customer>  {
    const headers : HttpHeaders = new HttpHeaders({
      'CorrelationId': 'haslo_haslo'
    });
    return this.httpClient.delete<Customer>(this.baseUrl + '/' + customer.id, {headers})
  //   console.log('Klient ma usunac:', customer)
  //   this.customersList = this.customersList.filter((x: Customer) => {
  //     return x.nip !== customer.nip;
  //   })
  //   return this.customersList;
  // 
  }
}
