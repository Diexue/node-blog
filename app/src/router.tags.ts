import {Component, Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'tags',
    template: `<div class="d-tags">
                   <div class="d-tags-item" *ngFor="let tag of tags">
                        <span class="d-tags-name">{{tag.name}}</span>
                        <span class="d-tags-count">{{'x' + tag.count}}</span>
                   </div>
               </div>`
})
@Injectable()
export class TagsComponent {
    constructor(http: Http) {
        http.get('../simulated/tags.json')
            .map(resp => resp.json())
            .subscribe(tags => this.tags = tags);
    }
};