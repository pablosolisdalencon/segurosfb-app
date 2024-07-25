import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  galleryImages = [

    { src: 'assets/familia5.jpg', alt: 'Seguros FB' , active: 'active'}/*,     
    { src: 'assets/accidentesPersonales.jpg', alt: 'Seguros accidentes Personales' , active: ''},
    { src: 'assets/automotriz.jpg', alt: 'Seguros automotriz' , active: ''},
    { src: 'assets/construccion.jpg', alt: 'Seguros construccion' , active: ''},
    { src: 'assets/hogar.jpg', alt: 'Seguros hogar' , active: ''},
    { src: 'assets/mascotas.jpg', alt: 'Seguros mascotas' , active: ''},
    { src: 'assets/motocicleta.jpg', alt: 'Seguros motocicleta' , active: ''},
    { src: 'assets/patrimonial.jpg', alt: 'Seguros patrimonial' , active: ''},
    { src: 'assets/rcInternacional.jpg', alt: 'Seguros rcInternacional' , active: ''},
    { src: 'assets/soap.jpg', alt: 'Seguros soap' , active: ''},
    { src: 'assets/transporteCarga.jpg', alt: 'Seguros transporte Carga' , active: ''},
    { src: 'assets/vehiculosPesados.jpg', alt: 'Seguros vehiculos Pesados' , active: ''}*/
  ];
}
