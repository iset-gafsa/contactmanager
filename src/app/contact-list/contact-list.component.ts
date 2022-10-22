import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deleteContact():void{
    let response = confirm("Voulez-vous supprimer le contact");
    if(response){
      alert("Contact supprimé");
    }else{
      alert("Action annulé");
    }
  }

  editContact():void{
    alert("Editer un contact");
  }
}
