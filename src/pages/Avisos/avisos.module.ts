import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Avisos } from './avisos';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Avisos,
  ],
  imports: [
    IonicPageModule.forChild(Avisos),
    ComponentsModule
  ],
  exports: [
    Avisos,
  ]
})
export class AvisosModule { }
