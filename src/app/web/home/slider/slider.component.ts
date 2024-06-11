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

    { src: 'assets/familia5.jpg', alt: 'Seguros FB' , active: 'active'}
    // Add more images as needed
    /*
        
    { src: 'assets/slider0.jpg', alt: 'Seguros FB' , active: ''},
    { src: 'assets/slider1.jpg', alt: 'Seguros FB' , active: ''},
    { src: 'assets/slider2.jpg', alt: 'Seguros FB' , active: ''},
    { src: 'assets/slider3.jpg', alt: 'Seguros FB' , active: ''},
    { src: 'assets/slider4.jpg', alt: 'Seguros FB' , active: ''},
    { src: 'assets/familia1.jpg', alt: 'Seguros FB' , active: ''},
    { src: 'assets/familia2.jpg', alt: 'Seguros FB' , active: ''},
    { src: 'assets/familia3.jpg', alt: 'Seguros FB' , active: ''},
    { src: 'assets/familia4.jpg', alt: 'Seguros FB' , active: ''},
    */
  ];
}
