import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import 'rxjs/add/operator/map';

import {AppComponent}   from './app.components';

import {ListComponent} from './router.list';
import {OrganizeComponent} from './router.organize';
import {TagsComponent} from './router.tags';
import {ReadingComponent} from './router.reading';
import {AboutComponent} from './router.about';
import {ArticleComponent} from './router.article';
import {ProjectsComponent} from './router.projects';
import {TagComponent} from './router.tag';

import {Router} from './app.routerConfig';
import {toYearPipe} from './blog.pipe';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(Router)
    ],
    declarations: [
        AppComponent,

        ListComponent,
        OrganizeComponent,
        TagsComponent,
        ReadingComponent,
        AboutComponent,
        ArticleComponent,
        ProjectsComponent,
        TagComponent,

        toYearPipe
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})

export class AppModule {}
