import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'organize',
    template: `<div class="d-organize" *ngFor="let item of organize">
                   <div class="d-organize-year">{{item.year | toYear}} <span>({{item.total}})</span></div>
                   <ul>
                        <li *ngFor="let article of item.list">
                           <span class="d-organize-title" [routerLink]="['/article', article.id]">{{article.title}}</span>
                           <span class="d-organize-date"> ({{article.time}})</span>
                        </li>
                   </ul>
               </div>`
})
export class OrganizeComponent {
    organize = [];
    constructor(http: Http) {
        http.get('http://localhost:8000/organize')
            .map(resp => resp.json())
            .subscribe(org => this.organize = org);
    }
};
