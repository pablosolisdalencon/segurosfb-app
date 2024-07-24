import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomotricesComponent } from './automotrices.component';

const routes: Routes = [
  {
    path: '',
    component: AutomotricesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomotricesRoutingModule { }
