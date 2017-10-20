import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaProfessor } from './area-professor';

@NgModule({
  declarations: [
    AreaProfessor,
  ],
  imports: [
    IonicPageModule.forChild(AreaProfessor),
  ],
})
export class AreaProfessorModule {}
