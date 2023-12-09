import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact = new Contact('', '', '', 'Family', '', '');
  @Input() index: number=0;
  constructor() {}

  ngOnInit(): void {}

  deleteContact(): void {
    let reponse = confirm('Voulez-vous supprimer le contact');
    if (reponse) {
      alert('Contact Supprimé');
    } else {
      alert('Action annulé');
    }
  }
}
