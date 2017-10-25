import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Manual } from './manual';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Manual,
  ],
  imports: [
    IonicPageModule.forChild(Manual),
    ComponentsModule
  ],
  exports: [
    Manual,
  ]
})
export class ManualModule {}
