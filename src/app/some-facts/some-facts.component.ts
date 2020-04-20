import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-facts',
  templateUrl: './some-facts.component.html',
  styleUrls: ['./some-facts.component.less']
})
export class SomeFactsComponent implements OnInit {
  title = 'some facts about sarus crane';
  constructor() { }

  ngOnInit() {
  }

}
