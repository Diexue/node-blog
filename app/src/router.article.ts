import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'article',
    template: '<div class="d-markdown" [innerHTML]="article"></div>'
})
export class ArticleComponent {
    article = '';
    id: any;
    constructor(http: Http, route: ActivatedRoute) {
        route.params.subscribe(params => this.id = params['id']);
        http.get('./app/simulated/article/' + this.id + '.html').subscribe(resp => this.article = resp['_body']);
    };
};