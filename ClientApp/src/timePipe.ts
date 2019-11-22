import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timePipe'
})
export class TimePipe implements PipeTransform {

    transform(value: any, args?: any): any {

        return value && value.length > 0 ? value.replace('.', ':') : value;
    }
}
