import { Component } from '@angular/core';
import { ContactoComponent } from '../contacto/contacto.component';
import { SliderComponent } from './slider/slider.component';
import { CotizadorComponent } from '../cotizador/cotizador.component';
import { ServiciosComponent } from '../servicios/servicios.component';
import { SegurosComponent } from '../seguros/seguros.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { AutomotricesComponent } from '../mkt/automotrices/automotrices.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ AutomotricesComponent,NosotrosComponent,ContactoComponent,SliderComponent,CotizadorComponent,ServiciosComponent,SegurosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
