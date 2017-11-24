import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController, NavParams, IonicPage } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service';
import { Storage } from '@ionic/storage';

@IonicPage()

@Component({
  selector: 'page-avisos',
  templateUrl: 'avisos.html',
  providers: [
    DataServiceProvider
  ]
})
export class Avisos {

  alerta: any;
  avisos: any;
  cursos: number[] = [];
  disciplinas: number[] = [];
  information: any;
  load: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dados: DataServiceProvider, public loader: LoadingController, public alerter: AlertController, private storage: Storage) {

    console.log(this.navParams);

    this.load = this.loader.create({
      content: 'Conectando'
    });
    this.load.present();

    this.alerta = this.alerter.create({
      message: 'Erro de conexão'
    });

    this.buscarInformacao();

  }



  buscarAvisos() {
    this.dados.getAvisos(this.disciplinas, this.cursos)
      .subscribe(
      (response) => {
        let data = response.json();
        this.avisos = data;
        console.log(this.avisos);
        this.load.dismiss();
      },
      (erro) => {
        console.error(erro);
        this.load.dismiss();
        this.alerta.present();
      },
      () => {
        console.log("completo");
      }
      );

  }

  buscarEscolhas() {

    this.storage.get('escolhas')
      .then((dados) => {
        console.log("dados");
        console.log(dados);
        if (dados == null) {
          console.log('nao tem dados');
        } else {
          console.log('tem dados');
          this.cursos = dados.cursos;
          this.disciplinas = dados.disciplinas;
        }
        this.buscarAvisos();
      },
      (erro) => {
        console.error(erro);
      });

  }

  buscarInformacao() {
    this.dados.getInformation()
      .subscribe(
      (response) => {
        let data = response.json();
        this.information = data;
        if (this.navParams.data.cursos != undefined && this.navParams.data.disciplinas != undefined) {
          this.cursos = this.navParams.data.cursos;
          this.disciplinas = this.navParams.data.disciplinas;
          this.buscarAvisos();
        }
        else {
          this.buscarEscolhas();
        }
      },
      (erro) => {
        console.error(erro);
        this.load.dismiss();
        this.alerta.present();
      }
      );
  }

  verDetalhes(aviso) {
    aviso.caminho = this.information.url_imagem;
    this.navCtrl.push('Detalhes', aviso);
  }

}
