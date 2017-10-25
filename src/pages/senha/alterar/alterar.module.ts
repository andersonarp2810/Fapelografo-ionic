import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Alterar } from './alterar';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    Alterar,
  ],
  imports: [
    IonicPageModule.forChild(Alterar),
    ComponentsModule
  ],
  exports: [
    Alterar,
  ]
})
export class AlterarModule {}
