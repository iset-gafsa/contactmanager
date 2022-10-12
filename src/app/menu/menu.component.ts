import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //define class member
  user: string = "Hi Walid";

  constructor() { }

  ngOnInit(): void {
  }

}
