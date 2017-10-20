import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as SHA2 from '../../components/sha2/sha2';
import { Tostador } from '../../providers/tostador';

/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Tostador]
})
export class Login {

  botaotxt: string;
  botaoDesativado: boolean;
  user: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tostador: Tostador) {
    this.botaotxt = "Entrar";
  }

  login() {
    this.botaoDesativado = true;
    this.botaotxt = "Conectando...";
    this.tostador.tostar(SHA2.SHA2_256("batata"), 2000);
    this.botaotxt = "Entrar";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
