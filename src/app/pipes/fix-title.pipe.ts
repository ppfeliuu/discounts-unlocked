import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixTitle'
})
export class FixTitlePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let title: any = '';

    if (value != null) {
      if (value.includes('&#038;') || value.includes('&#8217;')) {
        title = value.replace('&#038;', '&').replace('&#8217;', '´');
      } else {
        title = value;
      }
    }

    return title;
  }

}
