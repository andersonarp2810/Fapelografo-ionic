import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaProfessor } from './area-professor';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AreaProfessor,
  ],
  imports: [
    IonicPageModule.forChild(AreaProfessor),
    ComponentsModule
  ],
  exports: [
    AreaProfessor,
  ]
})
export class AreaProfessorModule {}
