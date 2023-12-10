import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  contact : Contact = new Contact(0,"","","","Work","","");

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    
  }

  addContact(){
    alert("Contact added");
    
  }
}
