import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic1',
  templateUrl: './topic1.component.html',
  styleUrls: ['./topic1.component.css']
})
export class Topic1Component implements OnInit {
  state1 = 'AB';
  state2 = true;

  constructor() {}

  ngOnInit() {}
}
