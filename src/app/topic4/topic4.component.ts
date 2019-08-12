import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic4',
  templateUrl: './topic4.component.html',
  styleUrls: ['./topic4.component.css']
})
export class Topic4Component implements OnInit {
  //Default pipes: https://angular.io/api?type=pipe
  title = 'Title is Superb';
  description = 'this is the description';
  today = new Date();
  amount = 1200.234566;

  constructor() {}

  ngOnInit() {}
}
