import {Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toYear'})
export class toYearPipe implements PipeTransform {
    transform(value: number) {
        return value + '年';
    }
}