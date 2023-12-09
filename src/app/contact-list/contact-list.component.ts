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

  markContactStyle: Record<string, string> = {};
  setMarkContactStyle() {
    this.markContactStyle = {
      'font-style': this.isFriendContact ? 'italic' : 'normal',
      'font-weight': !this.isFamilyContact ? 'bold' : 'normal',
      'font-size': this.isWorkContact ? '24px' : '12px',
    };
  }

  constructor() {
    this.setMarkContact();
    this.setMarkContactStyle();
  }

  ngOnInit(): void {}
}
