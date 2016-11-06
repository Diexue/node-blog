import {Component, Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'list',
    template: `<div class="d-list-item" *ngFor="let item of items">
                   <h3><span [routerLink]="['/article', item.bid]">{{item.title}}</span></h3>
                   <p [routerLink]="['/article', item.bid]">{{item.intro}}</p>
                   <div class="d-list-tags">
                       <span class="d-list-time">{{item.time}}</span>
                       <span class="d-list-tag"
                           *ngFor="let tag of item.tags"
                           [routerLink]="['/tag', tag.id]">{{"#" + tag.name}}</span>
                   </div>\
               </div>`
})
@Injectable()
export class ListComponent {
    items = [];
    constructor(private http: Http) {
        http.get('http://localhost:8000/latest')
            .map(resp => resp.json())
            .subscribe(items => this.items = items.map(function (item) {
                item.tags = JSON.parse(item.tags);
                return item;
            }));
    };
};


