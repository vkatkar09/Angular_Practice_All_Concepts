import {Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { ProductComponent } from './product/product.component';
export const routes : Route[] = [{
    path : 'home',
    component : HomeComponent
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
}
]