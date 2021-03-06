import { RouterModule, Routes } from '@angular/router'

//ruta principal de mi aplicacion
import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';



const appRoutes: Routes = [
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