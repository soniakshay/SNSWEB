import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sectiontitle',
  templateUrl: './sectiontitle.component.html',
  styleUrls: ['./sectiontitle.component.less']
})
export class SectiontitleComponent implements OnInit {
  @Input() title: any;
  constructor() { }

  ngOnInit() {

  }


}
