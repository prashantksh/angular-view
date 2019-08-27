import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-topic7',
  templateUrl: './topic7.component.html',
  styleUrls: ['./topic7.component.css']
})
export class Topic7Component implements OnInit, OnChanges {
  @Input() prop;
  @Output() customEvent = new EventEmitter();

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit() {
    console.log('OnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }

  childHandler() {
    console.log('Child Handler Called');
    this.customEvent.emit({ event: 'custom event', at: new Date() });
  }
}
