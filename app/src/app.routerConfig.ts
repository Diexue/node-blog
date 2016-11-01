import {ListComponent} from './router.list';
import {OrganizeComponent} from './router.organize';
import {TagsComponent} from './router.tags';
import {ReadingComponent} from './router.reading';
import {AboutComponent} from './router.about';
import {ArticleComponent} from './router.article';
import {ProjectsComponent} from './router.projects';
import {TagComponent} from './router.tag';

var Router = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'organize',
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
    },
    {
        path: 'tag/:id',
        component: TagComponent
    }
];

export {Router};