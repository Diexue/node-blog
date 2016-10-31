import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `<div class="d-header">
                <div class="d-logo" routerLink="/">DUER</div>
                <div class="d-nav">
                    <a [routerLink]="['/files']"    routerLinkActive="d-nav-active">归档</a>
                    <a [routerLink]="['/tags']"     routerLinkActive="d-nav-active">标签</a>
                    <a [routerLink]="['/reading']"  routerLinkActive="d-nav-active">读书</a>
                    <a [routerLink]="['/projects']" routerLinkActive="d-nav-active">作品</a>
                    <a [routerLink]="['/about']"    routerLinkActive="d-nav-active">我</a>
                </div>
             </div>
             <div class="d-content">
                <router-outlet></router-outlet>
             </div>`
})
export class AppComponent {}

