import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  transform(value: string, limit: number=40){
    return value.length > limit ? value.substring (0,limit) + '...' : value;
  }

}
