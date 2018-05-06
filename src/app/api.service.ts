import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API_URL = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) {}

  getAccounts(){
    return this.httpClient.get(`${this.API_URL}/accounts`);
  }

  getContacts(){
    return this.httpClient.get(`${this.API_URL}/contacts`);
  }
  createContact(contact){
    return this.httpClient.post(`${this.API_URL}/contacts/`,contact);
  }
  updateContact(contact){
    return this.httpClient.put(`${this.API_URL}/contacts/`,contact);
  }
  deleteContact(contact){
    return this.httpClient.delete(`${this.API_URL}/contacts/${contact.pk}`);
  }
  getLeads(){
    return this.httpClient.get(`${this.API_URL}/leads`);
  }
  getOpportunities(){
    return this.httpClient.get(`${this.API_URL}/opportunities`);
  }
}
