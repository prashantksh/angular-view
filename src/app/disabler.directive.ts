import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisabler]'
})
export class DisablerDirective {
  constructor() {}
}
