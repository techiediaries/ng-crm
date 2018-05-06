import { Component, OnInit } from '@angular/core';

import { APIService } from '../api.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private contacts: Array<object> = [];
  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.getContacts();
  }

  public getContacts(){
    this.apiService.getContacts().subscribe((data: Array<object>) => {

      this.contacts = data;
      console.log(data);
    });
  }

}
