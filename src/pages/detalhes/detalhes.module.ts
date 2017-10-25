import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Detalhes } from './detalhes';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Detalhes,
  ],
  imports: [
    IonicPageModule.forChild(Detalhes),
    ComponentsModule
  ],
  exports: [
    Detalhes,
  ]
})
export class DetalhesModule {}
