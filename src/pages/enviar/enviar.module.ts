import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Enviar } from './enviar';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Enviar,
  ],
  imports: [
    IonicPageModule.forChild(Enviar),
    ComponentsModule
  ],
  exports:[
    Enviar,
  ]
})
export class EnviarModule {}
