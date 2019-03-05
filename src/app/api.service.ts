import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API_URL = 'http://localhost:8000';
  REAPP_API_URL = 'https://XXX.XXXXX.XX';

  constructor(private httpClient: HttpClient) {}

  getAccounts() {
    return this.httpClient.get(`${this.API_URL}/accounts`);
  }

  getContacts() {
    return this.httpClient.get(`${this.API_URL}/contacts`);
  }
  createContact(contact) {
    return this.httpClient.post(`${this.API_URL}/contacts/`, contact);
  }
  updateContact(contact) {
    return this.httpClient.put(`${this.API_URL}/contacts/`, contact);
  }
  deleteContact(contact) {
    return this.httpClient.delete(`${this.API_URL}/contacts/${contact.pk}`);
  }
  getLeads() {
    return this.httpClient.get(`${this.API_URL}/leads`);
  }
  getOpportunities() {
    return this.httpClient.get(`${this.API_URL}/opportunities`);
  }
  getVoucherList() {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer NxLo231tD7WQDo2DKk2zaExh0HF8YPJnE'
      }
    );
    return this.httpClient.post(`${this.REAPP_API_URL}/api/v1/voucher/list/`, {}, {headers: headers});
  }
}
