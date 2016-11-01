import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `<div class="d-header">
                <div class="d-logo" routerLink="/">DUER</div>
                <div class="d-nav">
                    <a *ngFor="let nav of navigators" [routerLink]="[nav.router]" routerLinkActive="d-nav-active">{{nav.text}}</a>
                </div>
             </div>
             <div class="d-content">
                <router-outlet></router-outlet>
             </div>`
})
export class AppComponent {
    navigators = [
        {router: '/organize', text: '归档'},
        {router: '/tags', text: '标签'},
        {router: '/reading', text: '读书'},
        {router: '/projects', text: '作品'},
        {router: '/about', text: '我'}
    ];
};

