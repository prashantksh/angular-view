import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abcPipe'
})
export class AbcPipePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let inputs = '';

    args.forEach(a => {
      inputs += a + ', ';
    });
    return 'VAL ' + value + ' PARAMS: ' + inputs;
  }
}
