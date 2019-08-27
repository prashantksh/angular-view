import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-topic2',
  templateUrl: './topic2.component.html',
  styleUrls: ['./topic2.component.css']
})
export class Topic2Component implements OnInit, AfterViewInit {
  @ViewChild('anotherHeader', { static: false }) header: ElementRef;

  ngAfterViewInit() {
    console.log('AfterViewInit', this.header);
    this.header.nativeElement.style.color = 'Red';
  }

  constructor() {
    console.log('Constructor', this.header);
  }

  ngOnInit() {
    console.log('OnInit', this.header);
  }
}
