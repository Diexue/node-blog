import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent}   from './app.components';

import {ListComponent} from './router.list';
import {OrganizeComponent} from './router.organize';
import {TagsComponent} from './router.tags';
import {ReadingComponent} from './router.reading';
import {AboutComponent} from './router.about';
import {ArticleComponent} from './router.article';
import {ProjectsComponent} from './router.projects';

// import {RouterConfig} from './app.routerConfig';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'files',
                component: OrganizeComponent
            },
            {
                path: 'tags',
                component: TagsComponent
            },
            {
                path: 'reading',
                component: ReadingComponent
            },
            {
                path: 'projects',
                component: ProjectsComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'article/:id',
                component: ArticleComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        ListComponent,
        OrganizeComponent,
        TagsComponent,
        ReadingComponent,
        AboutComponent,
        ArticleComponent,
        ProjectsComponent
    ],
    bootstrap: [AppComponent]
})


export class AppModule {}
