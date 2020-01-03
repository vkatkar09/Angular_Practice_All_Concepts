import {Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { ProductComponent } from './product/product.component';
import { Authguard } from './authguard/auth';
export const routes : Route[] = [{
    path : 'home',
    component : HomeComponent,
    canActivate : [Authguard]
},
{
    path : 'about',
    component : AboutComponent,
    children : [{
        path : 'about1',
        component : About1Component
    },
    {
        path : 'about2',
        component : About2Component
    }
    ]
},
{
    path : 'product/:id',
    component : ProductComponent
},
{
    path : 'contact',
    loadChildren : './contact/contact.module#ContactModule'
}
]