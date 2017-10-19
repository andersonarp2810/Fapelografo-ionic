import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Enviar } from './enviar';

@NgModule({
  declarations: [
    Enviar,
  ],
  imports: [
    IonicPageModule.forChild(Enviar),
  ],
})
export class EnviarModule {}
