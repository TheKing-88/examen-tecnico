import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component'

import { ListComponent } from './list/list.component';
import { GraphComponent } from './graph/graph.component';


@NgModule({
    declarations: [
        PagesComponent,
        ListComponent,
        GraphComponent,
    ],
    exports: [
        ListComponent,
        GraphComponent, 
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
    ]
})

export class PagesModule {}