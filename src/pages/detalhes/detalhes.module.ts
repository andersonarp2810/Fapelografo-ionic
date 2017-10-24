import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Detalhes } from './detalhes';

@NgModule({
  declarations: [
    Detalhes,
  ],
  imports: [
    IonicPageModule.forChild(Detalhes),
  ],
})
export class DetalhesModule {}
