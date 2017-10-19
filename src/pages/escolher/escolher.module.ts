import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Escolher } from './escolher';

@NgModule({
  declarations: [
    Escolher,
  ],
  imports: [
    IonicPageModule.forChild(Escolher),
  ],
})
export class EscolherModule {}
