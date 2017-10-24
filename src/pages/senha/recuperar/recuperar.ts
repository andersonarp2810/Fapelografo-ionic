import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tostador } from '../../../providers/tostador';
/**
 * Generated class for the Recuperar page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-recuperar',
  templateUrl: 'recuperar.html',
  providers: [Tostador]
})
export class Recuperar {

  botaotxt: string = "Enviar";
  botaovale: boolean = true;
  imei: string;
  @ViewChild('recuperarForm') recuperarForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tostador: Tostador) {
  }

  recuperar() {
    this.botaotxt = "Enviando";
    this.botaovale = false;

    setTimeout(() => {
      this.tostador.tostar("Alguma coisa", 1000);
      this.botaotxt = "Enviar";
      this.botaovale = true;
    }, 1000);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Recuperar');
  }

}
