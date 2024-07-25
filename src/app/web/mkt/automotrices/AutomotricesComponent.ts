import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog, DialogForAccidentesPersonales, DialogForAutomotriz, DialogForConstruccion, DialogForHogar, DialogForMascotas, DialogForMotocicletas, DialogForSOAP, DialogForVehiculosPesados, DialogForRCI, DialogForTransporteCarga, DialogForPatrimonial } from './automotrices.component';

/**
 * @title Dialog Overview
 */

@Component({
  selector: 'app-automotrices',
  standalone: true,
  imports: [],
  templateUrl: './automotrices.component.html',
  styleUrl: './automotrices.component.css'
})
export class AutomotricesComponent {

  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '200%',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  // Bloque de código para seguros-accidentes-personales
  openDialogForAccidentesPersonales(): void {
    const dialogRef = this.dialog.open(DialogForAccidentesPersonales, {
      width: '200%',
      data: { name: this.name, entity: 'seguros-accidentes-personales' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }

  // Bloque de código para seguros-automotriz
  openDialogForAutomotriz(): void {
    const dialogRef = this.dialog.open(DialogForAutomotriz, {
      width: '200%',
      data: { name: this.name, entity: 'seguros-automotriz' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }
  // Bloque de código para seguros-construccion
  openDialogForConstruccion(): void {
    const dialogRef = this.dialog.open(DialogForConstruccion, {
      width: '200%',
      data: { name: this.name, entity: 'seguros-construccion' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }

  openDialogForHogar(): void {
    const dialogRef = this.dialog.open(DialogForHogar, {
      width: '200%',
      data: { name: this.name, entity: 'seguros-hogar' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }

  // Bloque de código para seguros-mascotas
  openDialogForMascotas(): void {
    const dialogRef = this.dialog.open(DialogForMascotas, {
      width: '200%',
      data: { name: this.name, entity: 'seguros-mascotas' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }

  // Bloque de código para seguros-motocicletas
  openDialogForMotocicletas(): void {
    const dialogRef = this.dialog.open(DialogForMotocicletas, {
      width: '200%',
      data: { name: this.name, entity: 'seguros-motocicletas' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }

  // Bloque de código para SOAP
  openDialogForSOAP(): void {
    const dialogRef = this.dialog.open(DialogForSOAP, {
      width: '200%',
      data: { name: this.name, entity: 'seguros-soap' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }
  openDialogForVehiculosPesados(): void {
    const dialogRef = this.dialog.open(DialogForVehiculosPesados, {
      width: '200%',
      data: { name: this.name, entity: 'seguros-vehiculos-pesados' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }
  openDialogForRCI(): void {
    const dialogRef = this.dialog.open(DialogForRCI, {
      width: '200%',
      data: { name: this.name, entity: 'seguros-rc-internacional' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }

  openDialogForPatrimonial(): void {
    const dialogRef = this.dialog.open(DialogForPatrimonial, {
      width: '200%',
      data: { name: this.name, entity: 'seguros-patrimonial' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }
  
  openDialogForTransporteCarga(): void {
    const dialogRef = this.dialog.open(DialogForTransporteCarga, {
      width: '200%',
      data: { name: this.name, entity: 'seguros-transporte-carga' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }



}
