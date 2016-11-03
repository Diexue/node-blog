import {Component, Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'list',
    template: `<div class="d-list-item" *ngFor="let item of items">
                   <h3><span [routerLink]="['/article', item.id]">{{item.title}}</span></h3>
                   <p [routerLink]="['/article', item.id]">{{item.desc}}</p>
                   <div class="d-list-tags">
                       <span class="d-list-time">{{item.time}}</span>
                       <span class="d-list-tag" *ngFor="let tag of item.tags">{{"#" + tag.name}}</span>
                   </div>\
               </div>`
})
@Injectable()
export class ListComponent {
    items = [];
    constructor(http: Http) {
        http.get('app/simulated/article-list.json')
            .map(resp => resp.json())
            .subscribe(items => this.items = items);
    }
};


