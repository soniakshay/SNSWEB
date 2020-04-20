import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.less']
})
export class LifeCycleComponent implements OnInit {
  title = 'life cycle of sarus creane';
  constructor() { }

  ngOnInit() {
  }

}
