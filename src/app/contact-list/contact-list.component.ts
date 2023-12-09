import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  isMarked = true;

  isFriendContact = true;
  isFamilyContact = false;
  isWorkContact = true;

  markContact: Record<string, boolean> = {};
  setMarkContact() {
    this.markContact = {
      friendContact: this.isFriendContact,
      familyContact: this.isFamilyContact,
      workContact: this.isWorkContact,
    };
  }

  constructor() {
    this.setMarkContact();
  }

  ngOnInit(): void {}
}
