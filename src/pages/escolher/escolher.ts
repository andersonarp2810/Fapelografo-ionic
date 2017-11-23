import { Component } from '@angular/core';
import { AlertController, LoadingController, MenuController, NavController, NavParams, IonicPage } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';


/**
 * Generated class for the Escolher page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-escolher',
  templateUrl: 'escolher.html',
  providers: [
    DataServiceProvider,
  ]
})
export class Escolher {

  escolhas = {
    cursos: [],
    disciplinas: []
  };
  information: any;
  primeiravez: boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataServiceProvider, private storage: Storage, private menu: MenuController, private loader: LoadingController, private alerter: AlertController) {

    let load = this.loader.create({
      content: 'Conectando...'
    });
    load.present();
    this.storage.get('escolhas')
      .then((dados) => {
        console.log("dados");
        console.log(dados);
        if (dados == null) {
          console.log('nao tem dados');
          this.primeiravez = true;
          //this.menu.enable(false, 'unauthenticated');
          //this.menu.enable(true, 'unauthenticated'); // pra pegar por enquanto
        } else {
          console.log('tem dados');
          this.primeiravez = false;
          this.escolhas = dados;
          this.menu.enable(true, 'unauthenticated');
        }
      },
      (erro) => {
        console.error(erro);
      });

    this.dataService.getInformation()
      .subscribe((response: any) => {
        console.log(response);
        let dados = response.json();
        console.log(dados);
        dados.cursos.map((curso) => {
          curso['check'] = this.primeiravez ? false : this.escolhas.cursos.some(x => x == curso.id);
          curso.disciplinas.map((disciplina) => {
            disciplina['check'] = this.primeiravez ? false : this.escolhas.disciplinas.some(x => x == disciplina.id);
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
    console.log('ai dento');
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

  salvar() {
    this.escolhas = {
      cursos: [],
      disciplinas: []
    };
    console.log(this.information);
    this.information.cursos.forEach(curso => {
      if (curso.check) this.escolhas.cursos.push(curso.id);
      curso.disciplinas.forEach(disc => {
        if (disc.check) this.escolhas.disciplinas.push(disc.id);
      });
    });
    this.storage.set('escolhas', this.escolhas);
    console.log(this.escolhas);
    this.navCtrl.setRoot('Avisos', this.escolhas);
  }

  limpar() {
    this.storage.clear();
    this.navCtrl.setRoot('Escolher');
  }

  toggleSection(i) {
    this.information.cursos[i].open = !this.information.cursos[i].open;
  }

}
