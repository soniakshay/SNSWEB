import { Component, OnInit } from '@angular/core';
declare const  $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      $('.responsiveMenuIcon').click(() => {
        $('.responsiveMenu').slideToggle();
      });
    });
  }

}
