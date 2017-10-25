import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pesquisa } from './pesquisa';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Pesquisa,
  ],
  imports: [
    IonicPageModule.forChild(Pesquisa),
    ComponentsModule
  ],
  exports: [
    Pesquisa,
  ]
})
export class PesquisaModule {}
