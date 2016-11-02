import {Component, Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'list',
    template: '<div class="d-list-item" *ngFor="let item of items">\
                   <h3>{{item.title}}</h3>\
                   <p>{{item.desc}}</p>\
                   <div class="d-list-tags">\
                       <span *ngFor="let tag of item.tags">{{"#" + tag.name}}</span>\
                   </div>\
               </div>'
})
@Injectable()
export class TagComponent {
    items = [];
    constructor(http: Http) {
        http.get('../simulated/article-list.json')
            .map(resp => resp.json())
            .subscribe(items => this.items = items);
    }
};


