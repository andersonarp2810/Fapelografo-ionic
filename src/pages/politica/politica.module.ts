import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Politica } from './politica';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Politica,
  ],
  imports: [
    IonicPageModule.forChild(Politica),
    ComponentsModule
  ],
  exports: [
    Politica,
  ]
})
export class PoliticaModule {}
