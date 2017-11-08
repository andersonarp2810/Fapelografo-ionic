import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Escolher } from './escolher';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Escolher,
  ],
  imports: [
    IonicPageModule.forChild(Escolher),
    ComponentsModule,
  ],
  exports: [
    Escolher,
  ],
  providers: [
  ]
})
export class EscolherModule { }
