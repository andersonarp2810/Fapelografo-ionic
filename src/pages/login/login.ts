import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public tostador: Tostador) {
    this.botaotxt = "Entrar";
  }

  login() {
    this.botaoDesativado = true;
    this.botaotxt = "Conectando...";

    setTimeout(() => {
      this.botaoDesativado = false;
      this.botaotxt = "Entrar";
      this.tostador.tostar(SHA2.SHA2_256("batata"), 2000);
    }, 3000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
