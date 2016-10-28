import {Component} from '@angular/core';

@Component({
  selector: 'navigator',
  template: '<div class="nb-nav-wrapper">\
             <ul class="nb-nav">\
             <li *ngFor="let navItem of nav">{{navItem}}</li>\
             </ul>\
             </div>'
})
export class NavComponent {
    nav = ['归档', '标签', '读书', '作品'];
}

