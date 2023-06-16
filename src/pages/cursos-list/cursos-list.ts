import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cursos-list',
  templateUrl: 'cursos-list.html',
})
export class CursosListPage {

  cursoArray = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afd: AngularFireDatabase) {

    // this.items.push('Ionic');
    // this.items.push('Arduino');

      this.listar().subscribe(cursos => {
        console.log(cursos);
        this.cursoArray = cursos;
      })
  }

  listar() {
    return this.afd.list('/cursos')
      .snapshotChanges()
      .map(item => item.map(changes => {
        let key = changes.payload.key;
        let value = changes.payload.val();

        let novoItem = value;
        novoItem.key = key;

        return novoItem;
      }))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursosListPage');
  }

  itemClicado(curso) {
    // console.log(curso);
    this.navCtrl.push('CursosFormPage', {'curso': curso});
  }

  openPage() {
    this.navCtrl.push('CursosFormPage');
  }
  
}
