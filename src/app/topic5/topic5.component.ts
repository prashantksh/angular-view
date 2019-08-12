import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic5',
  templateUrl: './topic5.component.html',
  styleUrls: ['./topic5.component.css']
})
export class Topic5Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  getCssClasses() {
    //return 'font-weight-bold';

    //return ['font-weight-bold', 'font-italic', 'text-success'];

    return {
      'font-weight-bold': true,
      'font-italic': true,
      'text-success': true
    };
  }

  getStyles(): object {
    return { 'background-color': 'grey', border: '2px solid blue' };
  }
}
