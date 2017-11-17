import { Component, ViewChild } from '@angular/core';
import { IonicPage, LoadingController, MenuController, NavController, NavParams } from 'ionic-angular';
import * as SHA2 from '../../components/sha2/sha2';
import { Tostador } from '../../providers/tostador';

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

  botaotxt: string;
  botaoDesativado: boolean = false;
  user: string;
  senha: string;
  @ViewChild('loginForm') loginForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tostador: Tostador, public menu: MenuController, public loading: LoadingController) {
    this.botaotxt = "Entrar";
    SHA2.SHA2_256('asdf');
  }

  login() {
    this.botaoDesativado = true;
    this.botaotxt = "Conectando...";
    let load = this.loading.create({
      content: 'Conectando...'
    })
    load.present();

    setTimeout(() => {
      this.botaoDesativado = false;
      this.botaotxt = "Entrar";
      //this.tostador.tostar(SHA2.SHA2_256("batata"), 2000);
      this.tostador.tostar('Login', 10);
      this.navCtrl.setRoot('AreaProfessor');
      this.menu.enable(false, 'unauthenticated');
      this.menu.enable(true, 'authenticated');
      load.dismiss();
    }, 300);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
