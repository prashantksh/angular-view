import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'otherPipe'
})
export class OtherPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
