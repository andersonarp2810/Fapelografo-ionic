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
        let data = response.json();
        this.information = data;
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

  filtrar() {
    let pesquisa = {
      escolha: this.escolha,
      tipo: this.tipo
    };
    console.log(pesquisa);
    this.navCtrl.setRoot('Avisos', pesquisa);
  }


  toggleSection(i) {
    this.information.cursos[i].open = !this.information.cursos[i].open;
  }
}
