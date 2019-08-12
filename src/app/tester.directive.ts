import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appTester]'
})
export class TesterDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'Blue';
  }

  @HostBinding('className')
  get cssClasses() {
    return 'font-weight-bold';
  }

  @HostListener('mouseleave', ['$event'])
  handleMouseOver(event) {
    console.log(event);
  }
}
