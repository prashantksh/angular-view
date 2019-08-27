import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app02';
  field = 'Hi there from Parent!';

  parentHandler(args) {
    console.log('Parent Handler Called', args);
  }
}
