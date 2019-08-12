import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return 'INR ' + value.toFixed(2) + '/-';
  }
}
