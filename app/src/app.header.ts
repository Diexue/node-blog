import {Component} from '@angular/core';

class nav {
    text: string;
    router: string;
};

@Component({
  selector: 'header',
  template: `<div class="d-header">
                <div class="d-logo">DUER</div>
                <div class="d-nav">
                    <a href="#" *ngFor="let item of navigator">{{item.text}}</a>
                </div>
             </div>`
})
export class HeaderComponent {
    navigator: nav[];
    navigator = [
        {text: '归档', router: ''},
        {text: '标签', router: ''},
        {text: '读书', router: ''},
        {text: '作品', router: ''},
        {text: '我', router: ''}
    ];
};

