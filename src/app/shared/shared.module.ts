import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SideberComponent } from './sideber/sideber.component';
import { BreacrumbsComponent } from './breacrumbs/breacrumbs.component';

@NgModule({
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SideberComponent,
        BreacrumbsComponent,
        NopagefoundComponent,
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        SideberComponent,
        BreacrumbsComponent,
        NopagefoundComponent,
    ]

})

export class SharedModule {}