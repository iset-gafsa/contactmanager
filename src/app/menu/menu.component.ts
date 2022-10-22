import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  imgAltText = 'Image not found';
  imageSrc = "https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_960_720.png"

  //define class member
  private user: string = "Hi Walid";

  constructor() { }

  ngOnInit(): void {
  }

  getUser():string{
    return this.user;
  }

}
