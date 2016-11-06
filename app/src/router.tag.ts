import {Component, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'list',
    template: `<div class="d-list-item" *ngFor="let item of items">
                   <h3><span [routerLink]="['/article', item.bid]">{{item.title}}</span></h3>
                   <p [routerLink]="['/article', item.bid]">{{item.intro}}</p>
                   <div class="d-list-tags">
                       <span class="d-list-time">{{item.time}}</span>
                       <span class="d-list-tag"
                           *ngFor="let tag of item.tags"
                           (click)="routeTag(tag.id)">{{"#" + tag.name}}</span>
                   </div>\
               </div>`
})
@Injectable()
export class TagComponent {
    items = [];
    id: any;
    constructor(private http: Http, private route: ActivatedRoute, private router: Router) {
        route.params.subscribe(params => this.id = params['id']);
        http.get('http://localhost:8000/tag?id=' + this.id)
            .map(resp => resp.json())
            .subscribe(items => this.items = items.map(function (item) {
                item.tags = JSON.parse(item.tags);
                return item;
            }));
    };
    routeTag(id) {
        console.log(this.router);
        this.router.navigate(['/tag/'+id]);
        this.id = id;
        this.http.get('http://localhost:8000/tag?id=' + this.id)
            .map(resp => resp.json())
            .subscribe(items => this.items = items.map(function (item) {
                item.tags = JSON.parse(item.tags);
                return item;
            }));
    };
};


