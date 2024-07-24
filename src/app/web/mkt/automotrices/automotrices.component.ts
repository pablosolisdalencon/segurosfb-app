import { Component, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material/dialog' 
import { MatDialog } from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}

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
      width: '80%',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  // Bloque de código para seguros-accidentes-personales
  openDialogForAccidentesPersonales(): void {
    const dialogRef = this.dialog.open(SegurosAccidentesPersonalesComponent, {
      width: '80%',
      data: { name: this.name, entity: 'seguros-accidentes-personales' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }

  // Bloque de código para seguros-automotriz
  openDialogForAutomotriz(): void {
    const dialogRef = this.dialog.open(SegurosAutomotrizComponent, {
      width: '80%',
      data: { name: this.name, entity: 'seguros-automotriz' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }
  // Bloque de código para seguros-construccion
  openDialogForConstruccion(): void {
    const dialogRef = this.dialog.open(SegurosConstruccionComponent, {
      width: '80%',
      data: { name: this.name, entity: 'seguros-construccion' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }

  openDialogForHogar(): void {
    const dialogRef = this.dialog.open(SegurosHogarComponent, {
      width: '80%',
      data: { name: this.name, entity: 'seguros-hogar' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }

  // Bloque de código para seguros-mascotas
  openDialogForMascotas(): void {
    const dialogRef = this.dialog.open(SegurosMascotasComponent, {
      width: '80%',
      data: { name: this.name, entity: 'seguros-mascotas' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }

  // Bloque de código para seguros-motocicletas
  openDialogForMotocicletas(): void {
    const dialogRef = this.dialog.open(SegurosMotocicletasComponent, {
      width: '80%',
      data: { name: this.name, entity: 'seguros-motocicletas' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }

  // Bloque de código para SOAP
  openDialogForSOAP(): void {
    const dialogRef = this.dialog.open(SegurosSOAPComponent, {
      width: '80%',
      data: { name: this.name, entity: 'seguros-soap' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }
  openDialogForVehiculosPesados(): void {
    const dialogRef = this.dialog.open(SegurosVehiculosPesadosComponent, {
      width: '80%',
      data: { name: this.name, entity: 'seguros-vehiculos-pesados' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }
  openDialogForRCI(): void {
    const dialogRef = this.dialog.open(SegurosRCInternacionalComponent, {
      width: '80%',
      data: { name: this.name, entity: 'seguros-rc-internacional' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Maneja el resultado aquí si es necesario
    });
  }



}



// SegurosAccidentesPersonalesComponent
@Component({
  selector: 'seguros-accidendes-personales',
  templateUrl: './seguros-accidentes-personales.html',
})
export class SegurosAccidentesPersonalesComponent {
  constructor(
    public dialogRef: MatDialogRef<SegurosAccidentesPersonalesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// SegurosAutomotrizComponent
@Component({
  selector: 'seguros-automotriz',
  templateUrl: './seguros-automotriz.html',
  standalone: true,
})
export class SegurosAutomotrizComponent {
  constructor(
    public dialogRef: MatDialogRef<SegurosAutomotrizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// SegurosConstruccionComponent
@Component({
  selector: 'seguros-construccion',
  templateUrl: './seguros-construccion.html',
})
export class SegurosConstruccionComponent {
  constructor(
    public dialogRef: MatDialogRef<SegurosConstruccionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// SegurosHogarComponent
@Component({
  selector: 'seguros-hogar',
  templateUrl: './seguros-hogar.html',
})
export class SegurosHogarComponent {
  constructor(
    public dialogRef: MatDialogRef<SegurosHogarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// SegurosMascotasComponent
@Component({
  selector: 'seguros-mascotas',
  templateUrl: './seguros-mascotas.html',
})
export class SegurosMascotasComponent {
  constructor(
    public dialogRef: MatDialogRef<SegurosMascotasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// SegurosMotocicletasComponent
@Component({
  selector: 'seguros-motocicletas',
  templateUrl: './seguros-motocicletas.html',
})
export class SegurosMotocicletasComponent {
  constructor(
    public dialogRef: MatDialogRef<SegurosMotocicletasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// SegurosPatrimonialComponent
@Component({
  selector: 'seguros-patrimonial',
  templateUrl: './seguros-patrimonial.html',
})
export class SegurosPatrimonialComponent {
  constructor(
    public dialogRef: MatDialogRef<SegurosPatrimonialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// SegurosRCInternacionalComponent
@Component({
  selector: 'seguros-rc-internacional',
  templateUrl: './seguros-rc-internacional.html',
})
export class SegurosRCInternacionalComponent {
  constructor(
    public dialogRef: MatDialogRef<SegurosRCInternacionalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// SegurosSOAPComponent
@Component({
  selector: 'seguros-soap',
  templateUrl: './seguros-soap.html',
})
export class SegurosSOAPComponent {
  constructor(
    public dialogRef: MatDialogRef<SegurosSOAPComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// SegurosTransporteCargaComponent
@Component({
  selector: 'seguros-transporte-carga',
  templateUrl: './seguros-transporte-carga.html',
})
export class SegurosTransporteCargaComponent {
  constructor(
    public dialogRef: MatDialogRef<SegurosTransporteCargaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// SegurosVehiculosPesadosComponent
@Component({
  selector: 'seguros-vehiculos-pesados',
  templateUrl: './seguros-vehiculos-pesados.html',
})
export class SegurosVehiculosPesadosComponent {
  constructor(
    public dialogRef: MatDialogRef<SegurosVehiculosPesadosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}



export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

 
  

  

}
export class DialogForAccidentesPersonales {
  constructor(
    public dialogRef: MatDialogRef<DialogForAccidentesPersonales>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export class DialogForAutomotriz {
  constructor(
    public dialogRef: MatDialogRef<DialogForAutomotriz>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export class DialogForConstruccion {
  constructor(
    public dialogRef: MatDialogRef<DialogForConstruccion>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export class DialogForHogar {
  constructor(
    public dialogRef: MatDialogRef<DialogForHogar>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export class DialogForMascotas {
  constructor(
    public dialogRef: MatDialogRef<DialogForMascotas>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export class DialogForMotocicletas {
  constructor(
    public dialogRef: MatDialogRef<DialogForMotocicletas>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export class DialogForPatrimonial {
  constructor(
    public dialogRef: MatDialogRef<DialogForPatrimonial>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export class DialogForRCI {
  constructor(
    public dialogRef: MatDialogRef<DialogForRCI>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export class DialogForSOAP {
  constructor(
    public dialogRef: MatDialogRef<DialogForSOAP>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export class DialogForTransporteCarga {
  constructor(
    public dialogRef: MatDialogRef<DialogForTransporteCarga>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export class DialogForVehiculosPesados {
  constructor(
    public dialogRef: MatDialogRef<DialogForVehiculosPesados>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
