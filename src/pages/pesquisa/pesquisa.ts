import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

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

  escolha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pesquisa');
  }

}
