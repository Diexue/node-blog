import {Component, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'content',
    template: '<div class="nb-content" *ngFor="let item of items"><h3>{{item.title}}</h3><p>{{item.desc}}</p></div>'
})
@Injectable()
export class Content {
    items = [];
    constructor(http: Http) {
        http.get('../simulated/article-list.json')
            .map(resp => resp.json())
            .subscribe(items => this.items = items);
    }
};
