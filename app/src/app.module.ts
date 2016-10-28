import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent}   from './app.component';
import {NavComponent} from './app.nav';
import {LogoComponent} from './app.logoComponent';
import {Content} from './app.content';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [
        AppComponent,
        LogoComponent,
        NavComponent,
        Content
    ],
    bootstrap: [AppComponent]
})


export class AppModule {}
