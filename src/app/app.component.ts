import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { ApiService } from './services/fbapi.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { FooterComponent } from './web/footer/footer.component';
import { NavComponent } from './web/nav/nav.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, MaterialModule,HttpClientModule,RouterOutlet,ReactiveFormsModule,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  data: any[] = [];
  title: any = "" ;
  public api = "";

  constructor(private apiService: ApiService ){}
    ngOnInit(): void {
      this.getEmpresas();
    }

    
  getEmpresas(){
    this.api="empresas";
    this.apiService.getData(this.api).subscribe((response) => {
      this.data=response;
      console.log((this.data));
      
    })
  }
  
}
