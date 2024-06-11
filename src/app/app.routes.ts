import { Routes } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { SeguroComponent } from './web/cotizador/seguro/seguro.component';
import { CotizadorComponent } from './web/cotizador/cotizador.component';
import { ContactoComponent } from './web/contacto/contacto.component';
import { SegurosComponent } from './web/seguros/seguros.component';
import { ServiciosComponent } from './web/servicios/servicios.component';
import { AutomotricesComponent } from './web/mkt/automotrices/automotrices.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'empresas',
        component: SeguroComponent
    },
    {
        path: 'automotrices',
        component: AutomotricesComponent
    },
    {
        path: 'seguros',
        component: SeguroComponent
    },
    {
        path: 'cotizador',
        component: CotizadorComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: 'cotizador',
        component: CotizadorComponent
    },
    {
        path: 'seguros',
        component: SegurosComponent
    },
    {
        path: 'servicios',
        component: ServiciosComponent
    }
];
