import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  createContact(){
    var contact = {
      account: 1,
      address: "Home N 333 Apartment 300",
      createdBy: 1,
      description: "This is the third contact",
      email: "abbess@email.com",
      first_name: "kaya",
      isActive: true,
      last_name: "Abbes",
      phone: "00121212101",
    };

    this.apiService.createContact(contact).subscribe((response) => {
      console.log(response);
    });
  };

}
