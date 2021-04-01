import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas 
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { ListComponent } from './pages/list/list.component';
import { GraphComponent } from './pages/graph/graph.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideberComponent } from './shared/sideber/sideber.component';
import { BreacrumbsComponent } from './shared/breacrumbs/breacrumbs.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    ListComponent,
    GraphComponent,
    HeaderComponent,
    SideberComponent,
    BreacrumbsComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
