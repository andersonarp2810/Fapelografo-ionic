import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController, NavParams, IonicPage } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { DataServiceProvider } from '../../providers/data-service';
import { Tostador } from '../../providers/tostador';

/**
 * Generated class for the Enviar page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-enviar',
  templateUrl: 'enviar.html',
  providers:[
    Tostador
  ]
})
export class Enviar {

  escolha: any;
  information: any;
  mensagem: string;
  sessao: any;
  tipo: any;
  titulo: string;


  form = new FormGroup({
    titulo: new FormControl('', Validators.required),
    mensagem: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required)
  });

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerter: AlertController, private loader: LoadingController, private storage: Storage, private dataService: DataServiceProvider, private tostador: Tostador) {

    this.buscaSessao();
    this.buscaInfo();
  }

  buscaInfo() {
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

  buscaSessao() {
    this.storage.get('sessao')
      .then(
      (dados) => {
        this.sessao = dados;
        if (this.sessao == null) {
          this.storage.remove('sessao');
          this.tostador.tostar("Sessão expirada", 1500);
          this.navCtrl.setRoot('Login');
        }
      },
      (erro) => {
        console.error(erro);
      }
      );
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

  confirmar(escolha: any) {
    let alerta = this.alerter.create({
      title: 'Enviar aviso?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: () => {
            console.log("enviado");
            console.log(this.sessao);
            console.log(this.titulo);
            console.log(this.mensagem);
            console.log(this.tipo);
            console.log(escolha.cursos);
            console.log(escolha.disciplinas);
            this.dataService.enviarAviso(this.sessao.session, this.sessao.id, this.titulo, this.mensagem, this.tipo, 4, escolha.cursos, escolha.disciplinas)
              .subscribe(
              (response) => {
                let dados = response.json();
                console.log(dados);
                if (dados.data == "não autenticado") {
                  this.storage.remove('sessao');
                  this.tostador.tostar("Sessão expirada", 1500);
                  this.navCtrl.setRoot("Login");
                }
                else {
                  this.tostador.tostar("Aviso enviado", 1500);
                  this.navCtrl.setRoot("Enviar");
                }
              },
              (erro) => {
                console.error(erro);
                let alerta = this.alerter.create({
                  message: 'Erro de conexão'
                });
                alerta.present();
              }
              );
          }
        }
      ]
    });

    alerta.present();
  }

  enviar() {
    let escolha = {
      cursos: [],
      disciplinas: []
    };
    console.log(this.information);
    this.information.cursos.forEach(curso => {
      if (curso.check) escolha.cursos.push(curso.id);
      curso.disciplinas.forEach(disc => {
        if (disc.check) escolha.disciplinas.push(disc.id);
      });
    });
    console.log(escolha);
    console.log(this.form);
    this.confirmar(escolha);
  }

  toggleSection(i) {
    this.information.cursos[i].open = !this.information.cursos[i].open;
  }

}
