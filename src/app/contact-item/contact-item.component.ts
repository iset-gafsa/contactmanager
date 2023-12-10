import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact = new Contact(0,'', '', '', 'Family', '', '');
  @Input() index: number=0;

  @Output() deleteEvent= new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  deleteContact(): void {
    let reponse = confirm('Voulez-vous supprimer le contact');
    if (reponse) {
      this.deleteEvent.emit(this.contact.id);
    }
  }
}
