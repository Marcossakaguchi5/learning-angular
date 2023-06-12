import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { SweetAlertComponent } from './components/sweet-alert/sweet-alert.component';




@NgModule({
  imports: [
    CommonModule,
    ],
    declarations: [ LoadingComponent, SweetAlertComponent ],
    exports:      [  LoadingComponent,SweetAlertComponent]

})
export class SharedModule {
 }
