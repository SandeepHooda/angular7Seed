import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

   openNav():void {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
   closeNav():void {
    document.getElementById("mySidenav").style.width = "0px";
  }

  ngOnInit() {
  }

}
