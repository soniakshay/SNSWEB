import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-profile',
  templateUrl: './our-profile.component.html',
  styleUrls: ['./our-profile.component.less']
})
export class OurProfileComponent implements OnInit {
  title:any =  'Our Profile';
  constructor() { }

  ngOnInit() {
  }

}
