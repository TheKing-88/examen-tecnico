import { RouterModule, Routes } from '@angular/router'

//ruta principal de mi aplicacion
import { PagesComponent } from './pages/pages.component';

import { ListComponent } from './pages/list/list.component';
import { GraphComponent } from './pages/graph/graph.component'; 
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';



const appRoutes: Routes = [
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
    },
    {
        path: 'login',
        component: LoginComponent
    }, 
    {
        path: '**',
        component: NopagefoundComponent
    }
]

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } )