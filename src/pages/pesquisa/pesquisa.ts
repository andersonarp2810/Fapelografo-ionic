import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController, NavParams, IonicPage } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service';

/**
 * Generated class for the Pesquisa page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})
export class Pesquisa {

  escolha: any;
  information: any;
  tipo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataServiceProvider, private loader: LoadingController, private alerter: AlertController) {

    let load = this.loader.create({
      content: 'Conectando...'
    });
    load.present();

    this.dataService.getInformation()
      .subscribe((response) => {
        console.log(response);
        let dados = response.json();
        console.log(dados);
        dados.cursos.map((curso) => {
          curso['check'] = false;
          curso.disciplinas.map((disciplina) => {
            disciplina['check'] = false;
            return disciplina;
          });
          return curso;
        });
        this.information = dados;
        console.log(this.information);
        load.dismiss();
      },
      (erro) => {
        console.error(erro);
        load.dismiss();
        let alerta = this.alerter.create({
          title: 'Erro de conexão'
        });
        alerta.present();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pesquisa');
  }

  check(curso) {
    console.log(curso);
    curso.disciplinas.map((disciplina) => {
      disciplina.check = curso.check;
      return disciplina;
    });
  }

  checkChild(curso, child) {
    console.log(child);
    if (child.check) {
      curso.check = true;
    }
    else {
      let todos = false;
      for (let i = 0; i < curso.disciplinas.length; i++) {
        if (curso.disciplinas[i].check) {
          todos = true;
          break;
        }
      }
      curso.check = todos;
    }
  }

  filtrar() {
    let pesquisa = {
      cursos: [],
      disciplinas: []
    };
    console.log(this.information);
    this.information.cursos.forEach(curso => {
      if (curso.check) pesquisa.cursos.push(curso.id);
      curso.disciplinas.forEach(disc => {
        if (disc.check) pesquisa.disciplinas.push(disc.id);
      });
    });
    console.log(pesquisa);
    this.navCtrl.setRoot('Avisos', pesquisa);
  }


  toggleSection(i) {
    this.information.cursos[i].open = !this.information.cursos[i].open;
  }
}
