import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursosListPage } from './cursos-list';

@NgModule({
  declarations: [
    CursosListPage,
  ],
  imports: [
    IonicPageModule.forChild(CursosListPage),
  ],
})
export class CursosListPageModule {}
