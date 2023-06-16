import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cursos-form',
  templateUrl: 'cursos-form.html',
})
export class CursosFormPage {

  key = undefined;
  nome = '';
  professor = '';
  cargaHoraria = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public afd: AngularFireDatabase) {

      let curso = this.navParams.get('curso'); // obtem o curso via parametro
      // console.log(curso);

      if(curso) { 
        this.key = curso.key;
        this.nome = curso.nome;
        this.professor = curso.professor;
        this.cargaHoraria = curso.carga_horaria;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursosFormPage');
  }

  salvar() {
    console.log('Nome: ' + this.nome)
    console.log('Professor: ' + this.professor)
    console.log('CH: ' + this.cargaHoraria)

    let curso = {
      'nome': this.nome,
      'professor': this.professor,
      'carga_horaria': this.cargaHoraria
    }

    if(this.key === undefined) { // inserir
      this.afd.list('/cursos').push(curso); // adiciona o curso no banco de dados

    } else { // editar
      this.afd.object('/cursos/' + this.key).update(curso);

    }

    this.navCtrl.pop(); // fecha a tela atual
  }

  removerConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Deseja remover?',
      message: 'Tem certeza que deseja remover este curso?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.afd.object('/cursos/'+this.key).remove();
            this.navCtrl.pop(); // fecha a tela atual
          }
        }
      ]
    });
    confirm.present();
  }

}
