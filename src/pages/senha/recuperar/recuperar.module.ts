import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Recuperar } from './recuperar';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    Recuperar,
  ],
  imports: [
    IonicPageModule.forChild(Recuperar),
    ComponentsModule
  ],
  exports: [
    Recuperar,
  ]
})
export class RecuperarModule {}
