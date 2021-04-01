import { RouterModule, Routes } from '@angular/router'

import { PagesComponent } from './pages.component';
import { ListComponent } from './list/list.component';
import { GraphComponent } from './graph/graph.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'list',
                component: ListComponent
            },
            {
                path: 'graph',
                component: GraphComponent
            },
            {
                path: '',
                redirectTo: '/list',
                pathMatch: 'full'
            },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);