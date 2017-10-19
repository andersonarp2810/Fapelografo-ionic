import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Politica } from './politica';

@NgModule({
  declarations: [
    Politica,
  ],
  imports: [
    IonicPageModule.forChild(Politica),
  ],
})
export class PoliticaModule {}
