import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tostador } from '../../../providers/tostador';

/**
 * Generated class for the Alterar page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-alterar',
  templateUrl: 'alterar.html',
  providers: [Tostador]
})
export class Alterar {

  antiga: string;
  botaotxt: string;
  botaovale: boolean;
  confirma: string;
  nova: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tostador: Tostador) {
  }

  enviar() {



    setTimeout(() => {
      this.tostador.tostar(this.antiga + this.nova, 500);
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Alterar');
  }

}
