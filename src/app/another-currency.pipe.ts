import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anotherCurrency'
})
export class AnotherCurrencyPipe implements PipeTransform {
  transform(value: number, ...args: any[]): string {
    switch (args[0]) {
      case 'USD':
        return '$ ' + value.toFixed(2);
        break;
      case 'EUR':
        return 'EUR ' + value.toFixed(2);
        break;
      case 'INR':
        return 'Rs ' + value.toFixed(2);
        break;

      default:
        return 'Unknown ' + value.toFixed(2);
        break;
    }
  }
}
