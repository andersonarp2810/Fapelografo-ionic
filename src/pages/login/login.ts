import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, LoadingController, MenuController, NavController, NavParams } from 'ionic-angular';
import * as SHA2 from '../../components/sha2/sha2';
import { Tostador } from '../../providers/tostador';
import { DataServiceProvider } from '../../providers/data-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Tostador]
})
export class Login {
  user: string;
  senha: string;
  @ViewChild('loginForm') loginForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tostador: Tostador, public menu: MenuController, public loading: LoadingController, private dataservice: DataServiceProvider, private storage: Storage, private alerter: AlertController) {
  }

  login() {
    let load = this.loading.create({
      content: 'Conectando...'
    })
    load.present();

    this.dataservice.login(this.user, this.senha, "")
      .subscribe(
      (dados) => {
        console.log(dados);
        this.storage.set('sessao', dados.json());
        this.navCtrl.setRoot('AreaProfessor');
        this.menu.enable(false, 'unauthenticated');
        this.menu.enable(true, 'authenticated');
      },
      (erro) => {
        console.error(erro);
        let alerta = this.alerter.create({
          message: 'Erro de conexão'
        });
        alerta.present();
      },
      ()=>{
        load.dismiss();
      }
      );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
