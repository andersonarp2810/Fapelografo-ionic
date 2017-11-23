import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController, NavParams, IonicPage } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service';

@IonicPage()

@Component({
  selector: 'page-avisos',
  templateUrl: 'avisos.html',
  providers: [
    DataServiceProvider
  ]
})
export class Avisos {

  avisos: any;
  information: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dados: DataServiceProvider, public loader: LoadingController, public alerter: AlertController) {

    let load = this.loader.create({
      content: 'Conectando'
    });
    load.present();

    let alerta = this.alerter.create({
      message: 'Erro de conexão'
    });

    this.dados.getInformation()
      .subscribe(
      (response) => {
        let data = response.json();
        this.information = data;
      },
      (erro) => {
        console.error(erro);
        load.dismiss();
        alerta.present();
      }
      );


    let cursos: number[] = [];
    let disciplinas: number[] = [];
    if (navParams.data.cursos != undefined) {
      cursos = navParams.data.cursos;
    }
    if (navParams.data.disciplinas != undefined) {
      disciplinas = navParams.data.disciplinas;
    }
    this.dados.getAvisos(disciplinas, cursos)
      .subscribe(
      (response) => {
        let data = response.json();
        this.avisos = data;
        console.log(this.avisos);
        load.dismiss();
      },
      (erro) => {
        console.error(erro);
        load.dismiss();
        alerta.present();
      },
      () => {
        console.log("completo");
      }
      );

  }


  verDetalhes(aviso) {
    aviso.caminho = this.information.url_imagem;
    this.navCtrl.push('Detalhes', aviso);
  }

}
