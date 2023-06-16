import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursosFormPage } from './cursos-form';

@NgModule({
  declarations: [
    CursosFormPage,
  ],
  imports: [
    IonicPageModule.forChild(CursosFormPage),
  ],
})
export class CursosFormPageModule {}
