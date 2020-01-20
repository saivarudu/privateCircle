import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  outputPipe: any;
  transform(value: any, args?: any): any {
    if (args === undefined || args === null || args === '') {
       return value;
    } else {
      this.outputPipe = value.filter((val: any) => {
        if (val.listName.toLowerCase().includes(args.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      return this.outputPipe;
    }
  }

}
